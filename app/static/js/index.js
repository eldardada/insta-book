import Swiper, {Navigation, Thumbs, EffectFade} from 'swiper'; 

Swiper.use([Navigation, Thumbs, EffectFade]);

window.addEventListener('load', function() {

    const feedbackContentSlider = new Swiper('.feedback__gallery-content', {
        loop: true,
        freeMode: true,
        loopedSlides: 7,
        allowTouchMove: false,
        effect: 'fade',
    });

    const galleryThumbs = new Swiper('.feedback__gallery-thumbs',  {
        slidesPerView: 3,
        spaceBetween: 20,
        watchSlidesProgress: true,
        breakpoints: {
            650: {
                slidesPerView: 6,
            }, 
            550: {
                slidesPerView: 5,
            }, 
            450: {
                slidesPerView: 4,
            },
            901: {
                slidesPerView: 7,
            }
        }
    });

    const galleryTop = new Swiper('.feedback__gallery-top',{
        
        slidesPerView: 1,
        slidesPerGroup: 1,
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
        },
    });


    galleryTop.on('slideChange', slider => feedbackContentSlider.slideTo(slider.activeIndex));

    const modals = document.querySelectorAll('.modal');
    const body = document.querySelector('body');
    function showModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
        modal.classList.add('md-show');
        body.style.overflow = 'hidden';
    }

    document.addEventListener('click', e => {
        const target = e.target;

        if(target.hasAttribute('data-modal')) {
            const modalSelector = target.dataset.modal;
            showModal(modalSelector);
        }
    });

    modals.forEach(modal => {
        let form = modal.querySelector('.form');
        
        form.addEventListener('submit', e => {
            let inputs = form.querySelectorAll('.input');
            let allGood = true;

            inputs.forEach(input => {
                if(input.value === '') {
                    input.classList.add('error');
                    allGood = false;
                }
                else if(input.classList.contains('error')) {
                    input.classList.remove('error');
                }
                if(!allGood) {
                    e.preventDefault();
                }
            });

        });

        modal.addEventListener('click', e => {
            const target = e.target;
            if(target.classList.contains('modal__close') || target.parentElement.classList.contains('modal__close')) {
                modal.classList.remove('md-show');
                body.style.overflow = '';
            }
        });

    });
    
});

