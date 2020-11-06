import Swiper, {Navigation, Thumbs, EffectFade, Lazy, Controller} from 'swiper'; 

Swiper.use([Navigation, Thumbs, EffectFade, Lazy, Controller]);

window.addEventListener('load', function() {

    const modals = document.querySelectorAll('.modal');
    const body = document.querySelector('body');
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
        allowTouchMove: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: 'cascade'
        },
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
        }
    });

    const galleryTop = new Swiper('.feedback-img .swiper-container', {
        lazy: {
            loadPrevNext: true,
        },
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
        controller: {
            control: feedbackContentSlider,
        }
    });

    document.addEventListener('click', e => {
        const target = e.target;

        if(target.hasAttribute('data-modal')) {
            const modal = document.querySelector(target.dataset.modal);
            showModal(modal);
        }
    });
  

    modals.forEach(modal => {
        const form = modal.querySelector('.form');
        const phone = modal.querySelector('[name="user_phone"]');
        const vk = modal.querySelector('[name="user_vk"]');
        const name = modal.querySelector('[name="user_name"]');
        const text = modal.querySelector('.modal-form__text');

        phone.addEventListener('input', () => {
            phone.value = phone.value.replace(/[А-Яа-яA-Za-z]/g, '');
        });
    
        phone.addEventListener('change', () => {
            if(phone.value.length > 25) phone.value = '';
        });

        form.addEventListener('submit', e => {

            e.preventDefault();

            function addError(input) {
                input.classList.add('error');
                error = true;
            }

            let error = false;

            if(phone.value === '' && vk.value === '') {
                text.style.color = 'red';
                error = true;
            }
            else {

                if(text.style.color == 'red') text.style.color = '#000';

                if(phone.value !== '' && phone.value.length < 5) addError(phone);
                else if(phone.classList.contains('error')) phone.classList.remove('error');

                if(vk.value !== '' && vk.value < 5) addError(vk);
                else if(vk.classList.contains('error')) vk.classList.remove('error');
            }

            if(name.value.length < 2) addError(name);
            else if(name.classList.contains('error')) name.classList.remove('error');
            
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


