<template>
  <div class="mt-16 container">
    <div class="swiper">
      <!-- Additional required wrapper -->

      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <div class="slide-image">
            <img src="~/assets/images/portfolio1.jpg" alt="portfolio">
            <p>Система управления и трансляции медиа контента “SmartCast”</p>
            <v-btn outlined rounded color="amber" class="mt-4">Подробнее</v-btn>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide-image">
            <img src="~/assets/images/portfolio2.jpg" alt="portfolio">
            <p>Система управления и трансляции медиа контента “SmartCast”</p>
            <v-btn outlined rounded color="amber" class="mt-4">Подробнее</v-btn>
          </div>
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination mb-5"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev">
      </div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use(Navigation, Pagination);
import "swiper/swiper-bundle.css";
export default {
  data: () => ({

  }),
  methods: {},
  mounted() {
    let swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      slidesPerView: 1.5,
      spaceBetween: 10,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      loop: true,
      // using "ratio" endpoint
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // renderBullet: function(index, className) {
        //    return `<span class="dot swiper-pagination-bullet"></span>`;
        // },
      },
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        414: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 1.5,
        },
        1366: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        1920: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
      },
    });
  }
}
</script>

<style lang="scss" scoped>

</style>
