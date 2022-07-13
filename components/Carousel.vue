<template>
  <div class="container">
    <div class="swiper">
      <!-- Additional required wrapper -->

      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <div class="slide-image">
            <img src="~/assets/images/portfolio1.jpg" alt="portfolio" />
            <p>Система управления и трансляции медиа контента “SmartCast”</p>
            <div class="d-flex justify-center justify-lg-start">
              <v-btn outlined rounded color="amber" class="mt-4">{{
                $t("portfolio.btn")
              }}</v-btn>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide-image">
            <img src="~/assets/images/portfolio2.jpg" alt="portfolio" />
            <p>Система управления и трансляции медиа контента “SmartCast”</p>
            <div class="d-flex justify-center justify-lg-start">
              <v-btn outlined rounded color="amber" class="mt-4">{{
                $t("portfolio.btn")
              }}</v-btn>
            </div>
          </div>
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination mb-5"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

export default {
  data: () => ({}),
  methods: {},
  mounted() {
    Swiper.use([Navigation, Pagination]);
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      slidesPerView: 2,
      direction: "horizontal",
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
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        // when window width is >= 480px
        414: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 2,
        },
        1366: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1920: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
