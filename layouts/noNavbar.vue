<template>
  <v-app dark>
    <Nav />
    <Nuxt />
    <div class="go-up" @click="goTop">
      <v-icon color="white" size="45">mdi-chevron-up</v-icon>
    </div>
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: "noNavbar",
  data: () => ({}),
  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    const go_up = document.querySelector(".go-up");
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        go_up.classList.remove("hide");
      } else  {
        go_up.classList.add("hide");
      }
    })
  }
};
</script>
<style>
html,
body {
  scroll-behavior: smooth !important;
}
@media (min-width: 1904px) {
  .container {
    max-width: 1320px;
  }
}
</style>
