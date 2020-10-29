// main dirs
global.appDir = './app/';
global.nodeModules = 'node_modules/';
global.appDirstatic = appDir + 'static/';
global.distDir = './dist/';
global.distDirstatic = distDir + 'static/';
// arch your html files
global.html_arch = appDir + '*.html';
// files name
global.mainSass = 'style.sass';
global.mainJs = 'script.js';
// for fonts include
global.srcFonts = appDirstatic + 'sass/_fonts.scss';
global.cb = () => {};
global.appFonts = appDirstatic + 'fonts/';
// config dirs
global.config = {

    // ur localhost
    localhost: 'http://localhost/wordpress/',

    // dirs for files ( develop )
    npm: {
        normalize: `${nodeModules}normalize.scss/*.scss`,
        reset: `${nodeModules}reset-css/sass/*.scss`,
        swiper: `${nodeModules}swiper/*.scss`,
    },
    app: {
        php: `${appDir}*.php`,
        js: `${appDirstatic}js/index.js`,
        sass: `${appDirstatic}sass/` + mainSass,
        img: `${appDirstatic}img/**/*.+(jpg|jpeg|png|svg||webmanifest||webp)`,
        fonts: `${appDirstatic}fonts/**/*`,
        svg: `${appDirstatic}img/svg/**/*.svg`,
        stylesLibs: `${appDirstatic}sass/libs`,
    },
    // dirs for files ( deploy )
    dist: {
        js: `${distDirstatic}js/`,
        css: `${distDir}`,
        img: `${distDirstatic}img/`,
        fonts: `${distDirstatic}fonts/`
    },
    // watching files dirs
    watch: {
        html: `${appDir}**/*.html`,
        php: `${appDir}*.php`,
        js: `${appDirstatic}js/**/*.js`,
        sass: `${appDirstatic}sass/**/*.+(sass|scss)`,
        img: `${appDirstatic}img/**/*`,
        svg: `${appDirstatic}img/svg/*.svg`,
        fonts: `${appDirstatic}fonts/**/*`,
        grid: `./smartgrid.js`

    }
};