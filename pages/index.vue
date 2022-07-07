<template>
  <div class="mt-16">

   <section class="header" id="header">
    <div class="container">
    <v-row>
      <v-col>
        <div>
          <div class="header__body">
            <div class="header__title">asgardia <sup>tm</sup></div>
            <div class="header__subtitle">надёжное программное обеспечение </div>
            <v-btn color="amber" class="header__btn" outlined rounded>обсудить проект</v-btn>
          </div>
        </div>
      </v-col>
      <v-spacer/>
      <v-col>
        <div class="header__info">
          <div class="d-flex align-center">
            <img src="~/assets/images/brilliant.svg" alt="icon">
            <p>Высокое качество и доступность IT решений</p>
          </div>
          <div class="d-flex align-center">
            <img src="~/assets/images/bag.svg" alt="icon">
            <p>Большой опыт и знания передовых технологий </p>
          </div>
          <div class="d-flex align-center">
            <img src="~/assets/images/persons.svg" alt="icon">
            <p>Открытость и искренность в общении с клиентами</p>
          </div>
        </div>
      </v-col>
    </v-row>
      <div class="d-flex justify-center">
        <div class="mouse"></div>
      </div>
      </div>
  </section >

   <div class="grey darken-3">
        <v-row class="about">
          <v-col class="white block-left" cols="12" lg="6">
            <div class="about__logo-left">
              <img src="~/assets/images/logo-left.svg" alt="logo icon">
            </div>
            <div class="about__mission">
              <div class="about__mission-title d-flex align-center">
                <img src="~/assets/images/rocket.svg" alt="about icon">
                <p>Миссия Компании</p>
              </div>
              <div class="about__mission-item d-flex align-start">
                <v-icon color="amber">mdi-star</v-icon>
                <p>
                  Обеспечить высокое качество и доступность IT решений в различных сферах бизнеса для наших клиентов
                </p>
              </div>
              <div class="about__mission-item d-flex align-start">
                <v-icon color="amber">mdi-star</v-icon>
                <p>
                  Создать команду, где нет сильной вертикальной управленческой иерархии, а работа строится на взаимном уважении, независимо от опыта и должностей членов команды, на взаимопомощи и ответственности друг перед другом и нашими клиентами
                </p>
              </div>
            </div>
          </v-col>
          <v-col class="grey darken-4 block-right" cols="12" lg="6" id="secure">
            <div class="about__logo-right">
              <img src="~/assets/images/logo-right.svg" alt="logo icon">
            </div>
            <div class="about__secure">
              <div class="about__secure-title d-flex align-center">
                <img src="~/assets/images/secure.svg" alt="about icon">
                <p>Преимущества Компании</p>
              </div>
              <div class="about__mission-item d-flex align-start">
                <v-icon color="amber">mdi-star</v-icon>
                <p>
                  Долгосрочное взаимовыгодное сотрудничество
                </p>
              </div>
              <div class="about__mission-item d-flex align-start">
                <v-icon color="amber">mdi-star</v-icon>
                <p>
                  Обеспечиваем продуманные, надежные и современные решения бизнес-задач
                </p>
              </div>
              <div class="about__mission-item d-flex align-start">
                <v-icon color="amber">mdi-star</v-icon>
                <p>
                  Реализуем нестандартные специализированные решения для наших клиентов
                </p>
              </div>
              <div class="about__mission-item d-flex align-start">
                <v-icon color="amber">mdi-star</v-icon>
                <p>
                  Мы являемся резидентами IT CYBER PARK Uzbekistan
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
    </div>

   <div class="portfolio">
     <div class="portfolio__title">Наши стартапы</div>
     <Carousel/>
   </div>
    <div class="info-cards">
      <div class="info-cards__title text-center">Чем мы занимаемся</div>
      <div class="info-cards__body d-flex justify-center container">
        <div class="info-cards__item">
          <div class="item-cards__icon"><img src="~/assets/images/info-1.svg" alt="icon"></div>
          <div class="info-cards__text">Разработка приложений для крупного, среднего и малого бизнеса. </div>
        </div>
        <div class="info-cards__item">
          <div class="item-cards__icon"><img src="~/assets/images/info-2.svg" alt="icon"></div>
          <div class="info-cards__text">Разработка мобильных приложений. </div>
        </div>
        <div class="info-cards__item">
          <div class="item-cards__icon"><img src="~/assets/images/info-3.svg" alt="icon"></div>
          <div class="info-cards__text">Тех. экспертиза, консультации и тех. поддержка. </div>
        </div>
        <div class="info-cards__item">
          <div class="item-cards__icon"><img src="~/assets/images/info-4.svg" alt="icon"></div>
          <div class="info-cards__text">Аутсорсинг и аутстаффинг. </div>
        </div>
      </div>
    </div>
    <div class="prices">
      <div class="prices__title text-center">стоимость и оценка разработки</div>
      <div class="prices__body container">
        <div class="prices__middle text-center">Средняя стоимость часа разработки - <span>$30</span> </div>
        <p class="text-center contact__title">Вы готовы обсудить проект?</p>
        <div class="d-flex justify-center contact">
          <p>Заполните форму и мы свяжемся с Вами
            в ближайшее время, чтобы обсудить проект:</p>
          <div>
            <v-text-field
              label="Ваше имя"
              dark
            />
          </div>
          <div>
            <v-text-field
              label="Ваш телефон"
              type="number"
              hide-spin-buttons
              dark
            />
          </div>
        </div>
        <div class="d-flex justify-center">
          <v-btn outlined rounded color="amber">Оценить проект</v-btn>
        </div>
      </div>
    </div>
   </div>

</template>

<script>
export default {
  name: "IndexPage",
  data: () => ({
    carousel: null
  }),
  created() {
  },
  methods: {
  },
  mounted() {
    VANTA.RINGS({
      el: "#header",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x000e2d,
    });
    VANTA.NET({
      el: "#secure",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3fff60,
      backgroundColor: 0x202020
    })
  }

};
</script>

<style lang="scss" scoped>
.theme--light {
  background: transparent !important;
}
</style>
