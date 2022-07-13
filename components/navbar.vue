<template>
  <nav>
    <div class="navbar container">
      <ul class="logoContainer">
        <li><img src="/logo-only.svg" class="logoImg" alt="logo" /></li>
        <li>
          <a href="#main" class="text-caption logo"
            >Компания- <br />разработчик ПО</a
          >
        </li>
      </ul>
      <v-spacer />
      <div class="nav-links" :class="{ opened: menuIsActive }">
        <div class="sidebar-logo">
          <img src="/logo-only.svg" alt="logo" />
          <div class="white--text text-h6 ml-4 mobile-logo">Asgardia</div>
          <v-spacer />
          <i class="bx bx-x" @click="menuEventButton"></i>
        </div>
        <ul class="links">
          <li>
            <a href="#services">{{ $t("navbar.services") }}</a>
          </li>
          <li>
            <a href="#about">{{ $t("navbar.about") }}</a>
          </li>
          <li>
            <a href="#portfolio">{{ $t("navbar.portfolio") }}</a>
          </li>
          <li>
            <a href="#price">{{ $t("navbar.price") }}</a>
          </li>
          <li>
            <a href="#contact">{{ $t("navbar.contact") }}</a>
          </li>
        </ul>
      </div>
      <v-spacer />
      <div class="navbar__controls d-flex">
        <img class="navbar__icon" src="/phone.svg" alt="phone icon" />
        <a href="tel:+998998573216" class="text-caption amber--text"
          >+998 (99) 857 32 16</a
        >
        <v-menu v-model="languageMenu" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="text-capitalize white--text ml-5"
              v-bind="attrs"
              v-on="on"
              text
            >
              {{ $t("lang") }}
              <v-icon small right>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item
              v-for="(lang, index) in langs"
              :key="index"
              @click="handleMenuItemClick(lang)"
            >
              <nuxt-link
                class="black--text lang-links"
                :to="switchLocalePath(lang.code)"
              >
                <v-list-item-title class="d-flex align-center">
                  <img :src="lang.icon" alt="flag" class="flag mr-2" />
                  {{ lang.title }}
                </v-list-item-title>
              </nuxt-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="log">
        <i class="bx bx-menu" @click="menuEventButton"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      langs: [
        { title: "Eng", code: "en", icon: "/us.svg" },
        { title: "Uz", code: "uz", icon: "/uz.svg" },
        { title: "Ru", code: "ru", icon: "/ru.svg" },
      ],
      activeLang: "Ru",
      dialog: false,
      languageMenu: false,
      menuIsActive: false,
      nav_items: ["Услуги", "О компании", "Портфолио", "Прайс", "Контакты"],
    };
  },
  methods: {
    handleMenuItemClick(lang) {
      console.log(lang);
      this.activeLang = lang.title;
    },
    handleAddLanguage() {
      alert("handle add new language!");
    },
    menuEventButton() {
      this.menuIsActive = !this.menuIsActive;
    },
  },
  mounted() {
    const nav = document.querySelector("nav");
    const go_up = document.querySelector(".go-up");
    window.onscroll = () => {
      if (window.scrollY > 150) {
        nav.classList.add('nav_color');
        go_up.classList.remove("hide");
      } else  {
        nav.classList.remove('nav_color');
        go_up.classList.add("hide");
      }
    };
  }
};
</script>

<style lang="scss">
@media (max-width: 414px) {
  .v-application .text-caption {
    font-size: 0.6rem !important;
    line-height: 1rem !important;
    vertical-align: middle;
  }
}
.flag {
  width: 25px;
}
.lang-links {
  text-decoration: none;
}
.links {
  display: flex;
}
.navbar {
  &__controls {
    display: flex;
    align-items: center;
    > img {
      width: 20px;
      margin-left: auto;
    }
    a {
      text-decoration: none;
      font-weight: 500;
      font-size: 12px;
      color: #feca2e;
      margin-left: 10px;
    }
  }
}
.logoContainer li {
  margin: 0 0 0 12px;

  line-height: 0 !important;
}
@media (min-width: 800px) {
  .mobile-logo {
    text-decoration: underline;
    display: none;
  }
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100vw;
  z-index: 100000;
  transition: all ease-in-out .2s;

  &.nav_color {
    background: #000;
    //background: #101a33;
  }
}

nav .navbar {
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //padding: 0 50px;
}

.logoContainer {
  margin-top: 15px;
  list-style: none;
  display: flex;
  align-items: flex-start;
}
.logoContainer li {
  display: inline-block;
  position: inherit;
  line-height: 70px;
}

.logoContainer li .logoImg {
  width: 60px;
  height: 60px;
  display: inline-block;
  vertical-align: middle;
  line-height: 70px;
  transform: translateY(-10%);
}

nav .navbar .logo {
  color: #fff;
  text-decoration: none;
  vertical-align: middle;

  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
}

nav .navbar .logo:hover {
  color: #f7ca2f;
}

nav .navbar .nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  line-height: 70px;
  vertical-align: middle;
}

nav .navbar .nav-links .links {
  display: flex;
}
nav .navbar .nav-links .links li {
  position: relative;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0 14px;
}

nav .navbar .nav-links .links li a {
  height: 100%;
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 0 solid transparent;
  transition: all 0.4s ease;
}

nav .navbar .nav-links .links li:hover a {
  color: #f7ca2f;
}
nav .navbar .nav-links .links li a:after {
  content: "";
  width: 0;
  display: block;
  height: 2px;
  background: #f7ca2f;
  transition: all 0.4s ease;
}

nav .navbar .nav-links .links li:hover a:after {
  width: 100%;
  transition: all 0.4s ease;
}

nav .navbar .bx-menu,
nav .navbar .nav-links .sidebar-logo .logo_name,
nav .navbar .sidebar-logo img,
nav .navbar .nav-links .sidebar-logo .bx-x {
  display: none;
}

.logoImg {
  width: 50px;
  height: 50px;
}

.button-login {
  background: #0d6efd;
  border: 1px solid #0d6efd;
  color: #fff;
  width: 80px;
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease;
}
.button-login:hover {
  border: 1px solid #0b5ed7;
  background: #0b5ed7;
}
.sidebar-button-login {
  display: none;
}

@media (max-width: 954px) {
  nav .navbar {
    max-width: 100%;
  }
  nav .navbar .nav-links .links li {
    padding: 0 10px;
  }
  nav .navbar .nav-links .links li a {
    font-size: 15px;
  }
}

@media (max-width: 800px) {
  nav > .header__subtitle {
    font-size: 20px !important;
  }
  nav .navbar .nav-links {
    display: block;
    position: fixed;
    background: #242524;
    top: 0;
    left: -300px;
    max-width: 270px;
    width: 100%;
    padding: 20px;
    line-height: 40px;
    transition: all 0.4s ease;
    z-index: 1000;
  }

  .logoImg {
    display: none;
  }

  nav .navbar .nav-links.opened {
    left: 0;
  }

  nav .navbar .nav-links .sidebar-logo {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
  }
  nav .navbar .bx-menu,
  nav .navbar .nav-links .sidebar-logo .logo_name,
  nav .navbar .nav-links .sidebar-logo .bx-x {
    color: #04ed93;
    font-size: 25px;
    font-weight: 500;
    display: block;
  }

  nav .navbar .sidebar-logo img {
    width: 50px;
    height: 50px;
    display: block;
  }

  nav .navbar .nav-links .links {
    display: block;
    margin-top: 20px;
  }

  nav .navbar .nav-links li a hr,
  nav .navbar .nav-links li:hover a hr {
    display: none;
    width: 0;
    background: transparent;
  }
  nav .navbar .nav-links .links li {
    display: block;
    border-bottom: none;
  }

  nav .navbar .bx-menu {
    cursor: pointer;
  }

  .sidebar-button-login {
    display: inline-block;
    background: #0d6efd;
    border: 1px solid #0d6efd;
    color: #fff;
    width: 80px;
    padding: 6px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 15px;
  }
}
.v-application ul,
.v-application ol {
  padding-left: 0 !important;
}
</style>
