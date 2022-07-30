<template>
  <div class="footer">
    <v-container>
      <div class="d-flex align-center justify-center">
        <a href="https://telegram.me/RuslanRakhmatov" target="_blank" class="mr-4">
          <i class="fa-solid fa-paper-plane"></i>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@asgardia.team" class="mr-4">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <p class="text-center">© 2022 OOO "Asgardia Team"</p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  a {
    text-decoration: none;
    color: #FFFFFF;
    i {
      font-size: 18px;
      transition: all ease-in-out .2s;
      &:hover {
        color: #F9BD08;
      }
    }
  }
}
p {
  margin: 0;
}

</style>
