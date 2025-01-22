import 'swiper/css/bundle';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const updateActiveBullet = swiper => {

    const bullets = document.querySelectorAll('.swiper-pagination .swiper-pagination-bullet');

    bullets.forEach((bullet) => {
        bullet.classList.remove('!h-[7px]', '!w-6', '!bg-[#F29F05]');
        bullet.classList.add('!size-[7px]', '!bg-[#8FBFFD]');
    });

    const activeBullet = bullets[swiper.activeIndex];

    if (activeBullet) {
        activeBullet.classList.add('!h-[7px]', '!w-6', '!bg-[#F29F05]');
        activeBullet.classList.remove('!size-[7px]', '!bg-[#8FBFFD]');
    }

}

new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
            return `
                <div class="${className} ${index === 0 ? '!h-[7px] !w-6 !rounded-full !opacity-100 !bg-[#F29F05]' : '!size-[7px] !rounded-full !bg-[#8FBFFD]'
                } !transition-all !duration-300 !cursor-pointer" data-index="${index}"></div>`;
        },
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
    on: {
        init: function () {
            updateActiveBullet(this);
        },
        slideChange: function () {
            updateActiveBullet(this);
        },
    },
    modules: [Pagination]
});

new Swiper(".suggestions", {
    slidesPerView: 'auto',
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});