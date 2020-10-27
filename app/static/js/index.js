// import 'core-js/features/promise';
import Swiper, {Navigation, Thumbs, EffectFade} from 'swiper'; 

Swiper.use([Navigation, Thumbs, EffectFade]);


const galleryThumbs = new Swiper('.feedback__gallery-thumbs', {
    allowTouchMove: false,
    spaceBetween: 20,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

const galleryTop = new Swiper('.feedback__gallery-top', {
    allowTouchMove: false,
    loop: true,
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
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});



let thumbsImages = document.querySelectorAll('.feedback__gallery-thumbs .swiper-slide');
let galetyImages = document.querySelectorAll('.feedback__gallery-top .swiper-slide');

const thumbContainer = document.querySelector('.feedback__gallery-thumbs');

function thumbsImagesRemoveActive() {
    thumbsImages.forEach(el => {
        if(el.classList.contains('swiper-slide-active')) {
            el.classList.remove('swiper-slide-active');
        }
    });
}


galleryTop.on('slideChange', (e) => {
    let index = e.activeIndex - 1;
    index === 0 ? index = thumbsImages.length : 1;
    index === thumbsImages.length ? index = 0 : 1;
    feedbackContentSlider.forEach(el => {
        el.slideTo(index);
    });
    
    thumbsImagesRemoveActive();
    console.log(index);

    !thumbsImages[index] ? index = 0 : 1;
    console.log(index);
    thumbsImages[index].classList.add('swiper-slide-active');
});

