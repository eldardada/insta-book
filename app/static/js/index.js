import Swiper, {Navigation, Thumbs, EffectFade, Lazy} from 'swiper'; 

Swiper.use([Navigation, Thumbs, EffectFade]);

window.addEventListener('load', function() {
    const modals = document.querySelectorAll('.modal');
    const body = document.querySelector('body');
    const inputsPhone = document.querySelectorAll('[data-validate="phone"]');
    const galleryThumbs = document.querySelector('.feedback-thumbs .swiper-container')


    function showModal(modal) {
        modal.classList.add('md-show');
        body.style.overflow = 'hidden';
    }

    function hideModal(modal) {
        modal.classList.remove('md-show');

        if(modal.classList.contains('submit')) {
            modal.classList.remove('submit');
        }

        body.style.overflow = '';
    }

    const feedbackContentSlider = new Swiper('.feedback-text .swiper-container', {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: 'cascade'
        }
    });


    const galleryThumbsSlider = new Swiper(galleryThumbs,  {
        slidesPerView: 2,
        watchOverflow: true,
        spaceBetween: 20,
        watchSlidesVisibility: true,
        breakpoints: {
            340: {
                slidesPerView: 3
            },
            500: {
                slidesPerView: 4
            },
            590: {
                slidesPerView: 5
            },
            692: {
                slidesPerView: 6
            },
            901: {
                slidesPerView: 4
            }, 
            980: {
                slidesPerView: 5
            },
            1140: {
                slidesPerView: 6
            },
            1200: {
                slidesPerView: 7
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

    inputsPhone.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/D/, '');
        })
    });

    galleryTop.on('slideChangeTransitionStart', (slider) => feedbackContentSlider.slideTo(slider.activeIndex));

    document.addEventListener('click', e => {
        const target = e.target;

        if(target.hasAttribute('data-modal')) {
            const modal = document.querySelector(target.dataset.modal);
            showModal(modal);
        }
    });
    let phone = document.querySelector('[name="user_phone"]');

    phone.addEventListener('input', e => {
        phone.value = phone.value.replace(/[А-Я а-я A-Z a-z]/g, '');
       
    });

    phone.addEventListener('change', e => {
        phone.value = phone.value.replace(/[А-Я а-я A-Z a-z]/g, '');
        if(phone.value.length > 20) {
            phone.value = '';
        }
    });

    modals.forEach(modal => {
        let form = modal.querySelector('.form');
        let inputs = form.querySelectorAll('.input');

        form.addEventListener('submit', e => {

            e.preventDefault();

            let error = false;

            function addError(input) {
                input.classList.add('error');
                error = true;
            }

            inputs.forEach(input => {
                
                if(input.value === '') {
                    if(!input.hasAttribute('data-unimportant')) {
                        input.classList.add('error');
                        error = true;
                    }
                }
                else if(input == phone) {
                    if(input.value.length < 5) addError(input);
                }
                else if(input.value.length < 2 ) addError(input);
                else if(input.classList.contains('error')) input.classList.remove('error');
                
            });
            
            if(!error) {
                let formData = new FormData(form);

                fetch('telegram.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if(data.res) {
                        modal.classList.add('submit');
                        setTimeout(function() {
                        hideModal(modal);
                        }, 1750);
                    }
                });
            }
        });

        modal.addEventListener('click', e => {
            const target = e.target;
            if(target.classList.contains('modal__close') || target.parentElement.classList.contains('modal__close')) {
                hideModal(modal);
            }

            if(modal === e.target) {
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


