import Swiper, {Navigation, Thumbs, EffectFade} from 'swiper'; 

Swiper.use([Navigation, Thumbs, EffectFade]);

window.addEventListener('load', function() {

    const feedbackContentSlider = new Swiper('.feedback-text .swiper-container', {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: 'cascade'
        }
    });

    const galleryThumbs = new Swiper('.feedback-thumbs .swiper-container',  {
        slidesPerView: 2,
        spaceBetween: 20,
        watchSlidesProgress: true,
        breakpoints: {
            340: {
                slidesPerView: 3,
            },
            500: {
                slidesPerView: 4,
            },
            625: {
                slidesPerView: 5,
            },
            900: {
                slidesPerView: 4,
            }, 
            980: {
                slidesPerView: 5,
            },
            1140: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 7,
            }
        }
    });

    const galleryTop = new Swiper('.feedback-img .swiper-container',{
        
        slidesPerView: 1,
        slidesPerGroup: 1,
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

    })
    
});


