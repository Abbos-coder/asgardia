<template>
  <div>
    <div class="container">
      <div class="swiper partners">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" data-swiper-autoplay="2000">
            <div class="slide-images">
              <img src="~/assets/images/sola-1.svg" alt="partners"/>
            </div>
          </div>
          <div class="swiper-slide" data-swiper-autoplay="2000">
            <div class="slide-images">
              <img src="~/assets/images/usoft.svg" alt="partners"/>
            </div>
          </div>
          <div class="swiper-slide" data-swiper-autoplay="2000">
            <div class="slide-images">
              <img src="~/assets/images/cyber-park.png" alt="partners"/>
            </div>
          </div>
        </div>
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
import Swiper, {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/swiper-bundle.css";

export default {
  data: () => ({}),
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay]);
    const swiper = new Swiper(".partners", {
      modules: [Navigation, Pagination, Autoplay],
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 2,
      direction: "horizontal",
      spaceBetween: 10,
      loop: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
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
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1920: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
    });
  }

}
</script>

<style lang="scss" scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper {
  width: 1250px;
}

</style>
