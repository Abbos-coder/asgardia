<template>
  <div class="footer">
    <v-container>
      <v-row>
        <v-col>
          <div class="footer__logo">
            <img src="/logo.svg" alt="logo">
          </div>
          <p>© 2022 OOO “Asgardia Team”</p>
        </v-col>
        <v-col>
          <div class="footer__menu">
            <div class="footer__menu-title ">Услуги</div>
            <div class="footer__menu-item service"><a href="#">О компании</a></div>
            <div class="footer__menu-item service"><a href="#">Портфолио</a></div>
            <div class="footer__menu-item service"><a href="#">Прайс</a></div>
          </div>
        </v-col>
        <v-col>
          <div class="footer__menu-title">Контакты</div>
          <div class="footer__menu-item d-flex align-center">
            <img src="/phone.svg" alt="phone icon">
            <a href="tel:+998998573216">+998 (99) 857 32 16</a>
          </div>
          <div class="footer__menu-item d-flex align-center">
            <img src="/gmail.svg" alt="gmail icon">
            <a href="#">rakhmatovruslan@gmail.com</a>
          </div>
          <div class="footer__menu-item d-flex align-center">
            <img src="/telegram.svg" alt="telegram icon">
            <a href="#">@RuslanRakhmatov</a>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

</style>
