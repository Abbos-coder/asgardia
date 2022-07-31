<template>
  <div class="container">
    <div class="swiper">
      <!-- Additional required wrapper -->

      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <div class="slide-image">
            <img src="~/assets/images/portfolio-1.png" alt="portfolio" />
            <p>Система управления и трансляции медиа контента “SmartCast”</p>
            <div class="d-flex justify-center justify-lg-start">
              <v-btn
                href="https://smartcast.uz"
                target="_blank"
                outlined
                rounded
                color="amber"
                class="mt-4"
              >
                {{ $t("portfolio.btn") }}
              </v-btn>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide-image">
            <img src="~/assets/images/portfolio-2.png" alt="portfolio" />
            <p>Система управления логистикой - DispatchMe</p>
            <div class="d-flex justify-center justify-lg-start">
              <v-btn
                href="https://samfreightllc.net"
                target="_blank"
                outlined
                rounded
                color="amber"
                class="mt-4"
              >
                {{ $t("portfolio.btn") }}
              </v-btn>
            </div>
          </div>
        </div>
      </div>
      <!-- If we need pagination -->
      <!--      <div class="swiper-pagination mb-5"></div>-->

      <!-- If we need navigation buttons -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
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
          spaceBetween: 0,
        },
        1920: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
