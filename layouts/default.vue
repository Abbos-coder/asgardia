<template>
  <v-app dark>
    <v-main>
      <Navbar />
      <Nuxt />
      <Footer />
    </v-main>
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