import Swiper, {Navigation, Thumbs, EffectFade} from 'swiper'; 

Swiper.use([Navigation, Thumbs, EffectFade]);

window.addEventListener('load', function() {
    // import 'core-js/features/promise';

    const galleryThumbs = new Swiper('.feedback__gallery-thumbs', {
        width: 68,
        allowTouchMove: true,
        slidesPerView: 1,
        spaceBetween: 20,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        freeMode: true,
        breakpoints: {
            901: {
                watchSlidesVisibility: false,
                watchSlidesProgress: false,
                allowTouchMove: false 
            }
        }
    });
    
    const galleryTop = new Swiper('.feedback__gallery-top', {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        thumbs: {
          swiper: galleryThumbs
        }
    });
    
    const feedbackContentSlider = new Swiper('.feedback__gallery-content', {
        slidesPerView: 1,
        allowTouchMove: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
    });
    
    
    galleryTop.on('slideChange', e => {
        let index = e.activeIndex;
    
        feedbackContentSlider.forEach(el => {
            el.slideTo(index);
        });
        
    });

    galleryThumbs.on('slideChange', function(e) {
        if(galleryThumbs.isEnd) console.log(1);
    });
    
});

