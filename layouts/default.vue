<template>
  <v-app dark>
      <Navbar />
      <Nuxt />
      <Footer />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data: () => ({}),
  methods: {},
};
</script>
<style>
html,
body {
  scroll-behavior: smooth !important;
}
</style>
