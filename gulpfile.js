// sys
import gulp from 'gulp';

// else sys
import gulpif from 'gulp-if';
import del from 'del';

// css
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import gcmq from 'gulp-group-css-media-queries';

// browser sync
import browserSync from 'browser-sync';

// img
import imagemin from 'gulp-imagemin';
import imgCompress from 'imagemin-jpeg-recompress';
import mozjpeg from 'imagemin-mozjpeg';

// tinypng
const tiny = 'API';
import tingpng from 'gulp-tinypng';

// smartgrid
import smartgrid from 'smart-grid';

// html
import fileinclude from 'gulp-file-include';
import htmlValidator from 'gulp-w3c-html-validator';

// svg sprite
import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import svgSprite from 'gulp-svg-sprite';
import replace from 'gulp-replace';

// fonts 
import ttf2woff2 from 'gulp-ttf2woff2';
import fs from 'fs';
import ttf2woff from 'gulp-ttf2woff';

// js
import webpack from 'webpack-stream';

// smart-grid
import smartgridSettings from './smartgrid.js';

// my variables for dev
const isDev = process.argv.includes('--dev');
const isProd = !isDev;

import './conf.js';

// webpack settings
const webConfig = {
  output: {
      filename: 'script.js'
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: '/node_modules/',
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env'],
                      plugins: ['@babel/plugin-proposal-object-rest-spread']
                  }
              }
          }
      ]
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : 'none'
}

// delete dist dir
export const clean = (done) => {
  let path = distDir;
  if(process.argv[3]) {
    let name = process.argv[3].replace('--', '');
    
    if(name) {
      path = name == 'css-libs' ? appDirstatic + 'sass/libs/**/*' : distDir;
    }
  }

  del(path);
  done();
}

const styles = () => {
  return gulp.src(config.app.sass)
          .pipe(gulpif(isDev, sourcemaps.init()))
          .pipe(sass().on('error', sass.logError))
          .pipe(gcmq())
          .pipe(autoprefixer({
              browsers: ['> 0.1%'],
              cascade: false
          }))
          .pipe(gulpif(isProd, cleanCSS({
              level: 2
          })))
          .pipe(gulpif(isDev, sourcemaps.write()))

          .pipe(gulp.dest(config.dist.css))
          .pipe(browserSync.stream())
}

const scripts = () => {
    return gulp.src(config.app.js)
           .pipe(webpack(webConfig))
           .pipe(gulp.dest(config.dist.js))
           .pipe(browserSync.stream())
}

const html = () => {
    return gulp.src(html_arch)
           .pipe(fileinclude())
           .pipe(htmlValidator())
           .pipe(gulp.dest(distDir))
           .pipe(browserSync.stream())
}

const php = () => {
    return gulp.src(config.app.php)
           .pipe(gulp.dest(distDir))
           .pipe(browserSync.stream())
}

const images = () => {

    return gulp.src([config.app.img, '!app/static/img/svg/**'])

           .pipe(gulpif(isProd,
             imagemin([
               imgCompress({
                   loops: 4,
                   min: 70,
                   max: 80,
                   quality: 'high'
               }),
               mozjpeg({
                 quality: 60,
                 progressive: true,
                 tune: "ms-ssim",
                 smooth: 2
               }),
               imagemin.gifsicle(),
               imagemin.svgo()
             ])
           ))
 
           .pipe(gulpif(isProd, tingpng(tiny) ))
 
           .pipe(gulp.dest(config.dist.img))
           .pipe(browserSync.stream())
}

const fontTtf2Woff = () => {
  return gulp.src('./app/static/fonts/**/*.ttf')
         .pipe(ttf2woff())
         .pipe(gulp.dest('./dist/static/fonts/'));
}

const fontTtf2Woff2 = () => {
  return gulp.src('./app/static/fonts/**/*.ttf')
         .pipe(ttf2woff2())
         .pipe(gulp.dest('./dist/static/fonts/'));
}

const checkWeight = (fontname) => {
  let weight = 400;
  
  switch (true) {
    case /Thin/.test(fontname):
      weight = 100;
      break;
    case /ExtraLight/.test(fontname):
      weight = 200;
      break;
    case /Light/.test(fontname):
      weight = 300;
      break;
    case /Regular/.test(fontname):
      weight = 400;
      break;
    case /Medium/.test(fontname):
      weight = 500;
      break;
    case /SemiBold/.test(fontname):
      weight = 600;
      break;
    case /Semi/.test(fontname):
      weight = 600;
      break;
    case /Bold/.test(fontname):
      weight = 700;
      break;
    case /ExtraBold/.test(fontname):
      weight = 800;
      break;
    case /Heavy/.test(fontname):
      weight = 700;
      break;
    case /Black/.test(fontname):
      weight = 900;
      break;
    default:
      weight = 400;
  }

  return weight;
}

const fontsStyle = (done) => {
  fs.writeFile(srcFonts, '', cb);
  fs.readdir(appFonts, function (err, fontnames) {
    if (fontnames) {
      let c_fontname;
      for (let fontname of fontnames) {
				fontname = fontname.split('.');
				fontname = fontname[0];
        let font = fontname.split('-')[0];
        let weight = checkWeight(fontname);

        if (c_fontname != fontname) {
          fs.appendFile(srcFonts, '@include font-face("' + font + '", "' + fontname + '", ' + weight +');\r\n', cb);
        }
        else {
          console.log(c_fontname);
          console.log(fontname);

        }
        c_fontname = fontname;
      }
    }
  })

  done();
}

const svg = () => {
  return gulp.src(config.app.svg)
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: {
              symbol: {
                  sprite: "../svg/sprite.svg"
              }
            }
        }))
        .pipe(gulp.dest('dist/static/img'));
}

export const grid = (done) => {
    smartgrid(appDirstatic + 'sass/libs', smartgridSettings)
    done()
};

const searchCss = (namedir) => {
  fs.readdir(namedir, (err, files) => {
    if(files) {
      
      let endOnce = true;

      for(let i = 0; i < files.length; i++) {

        let filename = files[i];

        if(/\.sass/.test(filename) && /\./.test(filename)) {
          return gulp.src(namedir + '/*.sass')
          .pipe(gulp.dest(config.app.stylesLibs))
          break;
        }
        else if(/\.scss/.test(filename)) {
          return gulp.src(namedir + '/*.scss')
          .pipe(gulp.dest(config.app.stylesLibs))
          break;
        }
        else if(!(/\./.test(filename)) && !endOnce) {
          searchCss(namedir + '/' + filename);
        }
        else if(i == files.length - 1 && endOnce) {
          i = 0;
          endOnce = false;
        }
      }
    }
  });
}


export const csslib = () => {
  searchCss(nodeModules + process.argv[3].replace('--', ''));
} 

const fonts = gulp.parallel( fontTtf2Woff2, fontTtf2Woff, fontsStyle);
 
export const build = gulp.series(clean, fonts, images, scripts, styles, php, html, svg);

export const watch = gulp.series(build, () => {
    browserSync.init({

      server: {
        notify: false,
        baseDir: distDir
      }
      // if u want to use sync + ur localhost
      // proxy: config.localhost
    })

    gulp.watch(config.watch.html, html)
    gulp.watch(config.watch.php, php)
    gulp.watch(config.watch.sass, styles)
    gulp.watch(config.watch.img, images)
    gulp.watch(config.watch.js, scripts)
    gulp.watch(config.watch.svg, svg)
    gulp.watch(config.watch.grid, grid)
    gulp.watch(config.watch.fonts, gulp.parallel(ttf2woff, ttf2woff2))
    gulp.watch(config.dist.fonts, fontsStyle)
  }
);
      
 