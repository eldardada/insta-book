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

    const galleryThumbs = document.querySelector('.feedback-thumbs .swiper-container')

    const galleryThumbsSlider = new Swiper(galleryThumbs,  {
        slidesPerView: 2,
        watchOverflow: true,
        spaceBetween: 20,
        watchSlidesVisibility: true,
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
        },
        
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
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbsSlider,
        },
    });

    const modals = document.querySelectorAll('.modal');
    const body = document.querySelector('body');
    
    const inputsPhone = document.querySelectorAll('[data-validate="phone"]');

    inputsPhone.forEach(input => {
        input.addEventListener('change', () => {
            console.log(input.value.math(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, ''));


        })
    });


    function showModal(modal) {
        modal.classList.add('md-show');
        body.style.overflow = 'hidden';
    }

    function hideModal(modal) {
        modal.classList.remove('md-show');
        body.style.overflow = '';
    }

    document.addEventListener('click', e => {
        const target = e.target;

        if(target.hasAttribute('data-modal')) {
            const modalSelector = target.dataset.modal;
            const modal = document.querySelector(modalSelector);
            showModal(modal);
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

    const overlay = document.querySelector('.md-overlay');

    overlay.addEventListener('click', () => {
        modals.forEach(modal => {
            if(modal.classList.contains('md-show')) {
                hideModal(modal);
            }
        });
    });

    galleryThumbsSlider.on('click', function(el) {
        const slides = galleryThumbs.querySelectorAll('.swiper-slide');
        let firstSlideVisible = 0;

        for (let i = 0; i < slides.length; i++) {
            if(slides[i].classList.contains('swiper-slide-visible')) {
                firstSlideVisible = i;
                break;
            }
        }

        if(el.clickedIndex !== firstSlideVisible) {
            galleryThumbsSlider.slideNext();
        }
        else {
            galleryThumbsSlider.slidePrev();
        }
    });
});


