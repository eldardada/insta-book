import Swiper, {Navigation, Thumbs, EffectFade} from 'swiper'; 

Swiper.use([Navigation, Thumbs, EffectFade]);

window.addEventListener('load', function() {

    const feedbackContentSlider = new Swiper('.feedback__gallery-content', {
        slidesPerView: 1,
        loop: true,
        freeMode: true,
        loopedSlides: 7,
        allowTouchMove: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    const galleryThumbs = new Swiper('.feedback__gallery-thumbs',  {
        slidesPerView: 1,
        loop: true,
        loopedSlides: 7,
        width: 120,
        spaceBetween: 20,
        allowTouchMove: false,
        watchSlidesProgress: true,
    });

    const galleryTop = new Swiper('.feedback__gallery-top',{
        slidesPerView: 1,
        loop: true,
        loopedSlides: 10,
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


    galleryTop.on('slideChange', slider => feedbackContentSlider.slideTo(slider.activeIndex));

   
    
});

