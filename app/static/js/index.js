import Swiper, {Navigation, Thumbs, EffectFade} from 'swiper'; 

Swiper.use([Navigation, Thumbs, EffectFade]);

window.addEventListener('load', function() {
    // import 'core-js/features/promise';

    const feedbackContentSliderSettings = {
        
    }


    let galleryThumbs = new Swiper('.feedback__gallery-thumbs', {
        slidesPerView: 1,
        loop: true,
        loopedSlides: 7,
        width: 100,
        spaceBetween: 20,
        freeMode: true,
        allowTouchMove: false,
        watchSlidesProgress: true,
        breakpoints: {
            901: {
                loop: false,
                watchSlidesProgress: false
            }
        }
    });
    
    let galleryTop = new Swiper('.feedback__gallery-top', {
        slidesPerView: 1,
        loop: true,
        loopedSlides: 7,
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
    let feedbackContentSlider = new Swiper('.feedback__gallery-content', {
        slidesPerView: 1,
        loop: true,
        loopedSlides: 7,
        allowTouchMove: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        breakpoints: {
            901: {
                loop: false,
                watchSlidesProgress: false
            }
        }
    });
    

    galleryTop.on('slideChange', slider => feedbackContentSlider.slideTo(slider.activeIndex));

  
    
});

