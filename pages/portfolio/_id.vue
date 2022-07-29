<template>
  <div class="">
<!--    <Navbar/>-->
    <div class="portfolio-info py-16">
      <div class="container">
        <v-row class="pt-16">
          <v-col class="portfolio-info__text" cols="12" xl="6" lg="6" md="12" sm="12">
            <div class="portfolio-info__title">
              <img src="~/assets/images/smart-logo.svg" alt="smart-cast">
              <span>Облачная система управления контентом</span>
            </div>
            <p class="mb-5">
              Программа “SmartCast” предназначена для управления медиа контентом и его трансляции на устройства под управлением операционной системы Android.
            </p>
            <p>
              Программный комплекс представляет собой клиент-серверное приложение и состоит из сайта и мобильного приложения. Управление медиа контентом пользователь осуществляет из своего личного кабинета на сайте.
            </p>
            <v-btn color="amber" rounded outlined class="mt-12">Перейти на сайт</v-btn>
          </v-col>
          <v-col class="d-flex justify-lg-end justify-sm-center" cols="12" xl="6" lg="6" md="12" sm="12">
            <div class="header__image">
              <img src="~/assets/images/dynamic-1.svg" alt="portfolio image">
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="portfolio-use container">
      <div class="portfolio-use__title">Где можно применить SmartCast</div>
      <v-row class="portfolio-use__items">
        <v-col v-for="(item, idx) in use_data" :key="idx" cols="12" lg="3" sm="6">
          <div class="portfolio-use__item">
            <div class="portfolio-use__item-head d-flex align-center flex-column">
              <img :src="item.icon" alt="icon">
              <p class="mt-3">{{ item.title }}</p>
            </div>
            <div class="portfolio-use__text">{{ item.text }}</div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="container">
      <div class="line"></div>
    </div>
    <div class="advantages">
      <div class="advantages__body container">
        <div class="advantages__title">Преимущества системы SmartCast</div>
        <v-row class="advantages__cards mt-16" justify="center">
          <v-col cols="12" lg="6" sm="12" v-for="(item, idx) in advantages" :key="idx">
            <div class="advantages__card">
              <div class="advantages__card--img">
                <img :src="item.img" alt="card icon">
              </div>
              <div class="advantages__card--title">{{ item.title }}</div>
              <div class="advantages__card--line"></div>
              <div class="advantages__card--text">{{ item.text }}</div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'noNavbar',
  data: () => ({
    use_data: [
      {
        icon: '/use-1.svg',
        title: 'Реклама',
        text: 'Реклама новых товаров, акций, конкурсов на Ваших торговых площадках'
      },
      {
        icon: '/use-2.svg',
        title: 'Объявления',
        text: 'Реклама новых товаров, акций, конкурсов на Ваших торговых площадках'
      },
      {
        icon: '/use-3.svg',
        title: 'Презентации',
        text: 'Реклама новых товаров, акций, конкурсов на Ваших торговых площадках'
      },
      {
        icon: '/use-4.svg',
        title: 'Новости',
        text: 'Реклама новых товаров, акций, конкурсов на Ваших торговых площадках'
      }
    ],
    advantages: [
      {
        img: '/advantages-1.svg',
        title: 'Лекгий старт',
        text: 'Решение быстро и легко запускается. Все шаги просты и не требуют долгого обучения. Имеется бесплатный тариф для тестирования решения.'
      },
      {
        img: '/advantages-2.svg',
        title: 'Централизованность',
        text: 'Облачное решение дает возможность управлять всеми Вашими устройствами не вставая с кресла и из любой точки мира.'
      },
      {
        img: '/advantages-3.svg',
        title: 'Удобство управления',
        text: 'Удобная админ панель в личном кабинете экономит Вам время и дает гибкость в управлении Вашими  устройствами.'
      },
      {
        img: '/advantages-4.svg',
        title: 'Экономия средств',
        text: 'Реализация решения не требует больших вложений или трудозатрат. Также Вы можете подобрать оптимальный тарифный план под Ваши потребности.'
      },
       {
        img: '/advantages-5.svg',
        title: 'Поддержка и развитие',
        text: 'Проект имеет профессианальную команду поддержки, которая открыта для предложений. Команда разработчиков постоянно работает над развитием проекта, а значит все последние улучшения сразу становятся Вам доступны.'
      },

    ]
  })
}
</script>

<style lang="scss" scoped>
html,
body,
.v-application {
  background-color: #f9f9f9 !important;
}
.navbar, nav {
  background: radial-gradient(63.62% 105.04% at 0% 30.3%, #015EA5 0%, #101A33 100%);
}
</style>
