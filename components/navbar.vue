<template>
  <nav>
    <div class="navbar container">
      <ul class="logoContainer">
        <li><img src="/logo-only.svg" class="logoImg" alt="logo" /></li>
        <li><a href="#" class="logo">Asgardia</a></li>
      </ul>

      <div class="nav-links" :class="{ opened: menuIsActive }">
        <div class="sidebar-logo">
          <img src="/logo-only.svg" alt="logo" />
          <div class="white--text text-h6 ml-4 mobile-logo">Asgardia</div>
          <v-spacer />
          <i class="bx bx-x" @click="menuEventButton"></i>
        </div>
        <ul class="links">
          <li v-for="(link, idx) in nav_items" :key="idx">
            <a href="#">
              {{ link }}
              <hr />
            </a>
          </li>
        </ul>
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
      menuIsActive: false,
      nav_items: ["Услуги", "О компании", "Портфолио", "Прайс", "Контакты"],
    };
  },
  methods: {
    menuEventButton() {
      this.menuIsActive = !this.menuIsActive;
    },
  },
};
</script>

<style scoped>
.v-application ul,
.v-application ol {
  padding-left: 0 !important;
}
@media (min-width: 800px) {
  .mobile-logo {
    text-decoration: underline;
    display: none;
  }
}
nav {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #101a33;
  z-index: 100000;
}

nav .navbar {
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 0;
}

.logoContainer {
  list-style: none;
}
.logoContainer li {
  display: inline-block;
  position: inherit;
  line-height: 70px;
}

.logoContainer li .logoImg {
  display: inline-block;
  vertical-align: middle;
  line-height: 70px;
  transform: translateY(-10%);
}

nav .navbar .logo {
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s ease;
}

nav .navbar .logo:hover {
  color: #04ed93;
}

nav .navbar .nav-links {
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
  border-bottom: 0px solid transparent;
  transition: all 0.4s ease;
}

nav .navbar .nav-links .links li:hover a {
  color: #04ed93;
}
nav .navbar .nav-links .links li a hr {
  width: 0px;
  display: hidden;
  border: none;
  border-radius: 70px;
  height: 1.8px;
  background: #04ed93;
  transform: translateY(-1300%);
  transition: all 0.4s ease;
}

nav .navbar .nav-links .links li:hover a hr {
  display: block;
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
    padding: 0 25px;
  }
  nav .navbar .nav-links .links li {
    padding: 0 10px;
  }
  nav .navbar .nav-links .links li a {
    font-size: 15px;
  }
}

@media (max-width: 800px) {
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
    width: 0px;
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
</style>
