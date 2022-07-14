<template>
  <div>
    <div class="container">
      <div class="swiper partners">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <div class="slide-images">
              <img src="~/assets/images/sola-1.svg" alt="partners"/>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slide-images">
              <img src="~/assets/images/usoft.svg" alt="partners"/>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slide-images">
              <img src="~/assets/images/cyber-park.png" alt="partners"/>
            </div>
          </div>
        </div>
        <!-- If we need pagination -->
<!--        <div class="swiper-pagination mb-5"></div>-->

        <!-- If we need navigation buttons -->
        <div class="swiper-prev">
          <img src="~/assets/images/angle-left.svg" alt="arrow">
        </div>

        <div class="swiper-next">
          <img src="~/assets/images/angle-right.svg" alt="arrow">
        </div>

        <!-- If we need scrollbar -->
<!--        <div class="swiper-scrollbar"></div>-->
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, {Navigation, Pagination} from "swiper";
import "swiper/swiper-bundle.css";

export default {
  data: () => ({}),
  mounted() {
    Swiper.use([Navigation, Pagination]);
    const swiper = new Swiper(".partners", {
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
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      autoplay: {
        delay: 3000,
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
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 2.5,
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
  }

}
</script>

<style scoped>

</style>
