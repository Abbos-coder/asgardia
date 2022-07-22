<template>
  <div class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" lg="4">
          <div class="footer__logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <p class="mt-16">© 2022 OOO “Asgardia Team”</p>
        </v-col>
        <v-col cols="12" sm="12" lg="4">
          <div class="footer__menu">
<!--            <div class="footer__menu-title">{{ $t("navbar.menu") }}</div>-->
            <div class="footer__menu-item service">
              <a href="#">{{ $t("navbar.services") }}</a>
            </div>
            <div class="footer__menu-item service">
              <a href="#">{{ $t("navbar.about") }}</a>
            </div>
            <div class="footer__menu-item service">
              <a href="#">{{ $t("navbar.portfolio") }}</a>
            </div>
            <div class="footer__menu-item service">
              <a href="#">{{ $t("navbar.price") }}</a>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" lg="4">
          <div class="footer__menu-title">{{ $t("navbar.contact") }}</div>
          <div class="footer__menu-item d-flex align-center">
            <img src="/phone.svg" alt="phone icon" />
            <a href="tel:+998998573216">+998 (99) 857 32 16</a>
          </div>
          <div class="footer__menu-item d-flex align-center">
            <img src="/gmail.svg" alt="gmail icon" />
            <a href="#" class="text-lowercase">rakhmatovruslan@asgardia.team</a>
          </div>
          <div class="footer__menu-item d-flex align-center">
            <img src="/telegram.svg" alt="telegram icon" />
            <a href="https://telegram.me/RuslanRakhmatov" class="text-lowercase">@RuslanRakhmatov</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
