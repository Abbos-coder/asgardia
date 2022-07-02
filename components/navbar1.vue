<template>
  <div class="navbar">
    <div class="navbar__body">
      <v-row>
        <v-col>
          <div class="navbar__logo">
            <img src="/logo.svg" alt="logo" />
          </div>
        </v-col>
        <v-col>
          <ul class="nabar__list">
            <li v-for="(link, idx) in nav_items" :key="idx">
              <a href="#" class="navbar__link">{{ link }}12</a>
            </li>
          </ul>
        </v-col>
        <v-col>
          <div class="navbar__controller">
            <div class="navbar__controller--phone">
              <a href="tel:+998998573216">+998(99) 857 32 16</a>
            </div>
            <div class="navbar__controller--lang"></div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    nav_items: ["Услуги", "О компании", "Портфолио", "Прайс", "Контакты"],
  }),
  methods: {},
};
</script>

<style>
</style>