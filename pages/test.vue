<template>
  <section style="width: 100%">
    <full-page >
      <section class="section">
        <Navbar />
        <div class="header" id="main">
          <div class="container">
            <v-row class="bg-header">
              <v-col>
                <div>
                  <div class="header__body">
                    <div class="header__title">asgardia <sup>tm</sup></div>
                    <div class="header__subtitle">
                      {{ $t("header.title") }}
                    </div>
                    <div class="d-flex justify-center justify-lg-start">
                      <v-btn color="amber" href="#contact" class="header__btn" outlined rounded>
                        {{ $t("header.btn") }}
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col class="d-flex justify-end">
                <div class="header__info">
                  <div class="d-flex align-center ">
                    <img src="~/assets/images/brilliant.svg" alt="icon" />
                    <p>{{ $t("header.col_1") }}</p>
                  </div>
                  <div class="d-flex align-center">
                    <img src="~/assets/images/bag.svg" alt="icon" />
                    <p>{{ $t("header.col_2") }}</p>
                  </div>
                  <div class="d-flex align-center">
                    <img src="~/assets/images/persons.svg" alt="icon" />
                    <p>{{ $t("header.col_3") }}</p>
                  </div>
                </div>
              </v-col>
            </v-row>
            <div class="d-flex justify-center mouse-scroll">
              <div class="mouse"></div>
            </div>
          </div>
          <!--      <video src="~/assets/video/bg-video-2.mp4" autoplay muted loop></video>-->
        </div>
      </section>

      <section class="section">
        <div class="grey darken-3" id="about">
          <v-row class="about">
            <v-col class="block-left #044F8C" cols="12" lg="6">
              <div class="about__logo-left">
                <img src="~/assets/images/logo-left.svg" alt="logo icon" />
              </div>
              <div class="about__mission">
                <div class="about__mission-title d-flex align-center">
                  <img src="~/assets/images/rocket.svg" alt="about icon" />
                  <p class="white--text">{{ $t("about.mission") }}</p>
                </div>
                <div
                  class="about__mission-item d-flex align-start"
                >
                  <v-icon color="amber">mdi-star</v-icon>
                  <p>
                    {{ $t("about.mission_item_1") }}
                  </p>
                </div>
                <div
                  class="about__mission-item d-flex align-start"
                >
                  <v-icon color="amber">mdi-star</v-icon>
                  <p>
                    {{ $t("about.mission_item_2") }}
                  </p>
                </div>
              </div>
            </v-col>
            <v-col class="block-right" cols="12" lg="6" id="secure">
              <div class="about__logo-right">
                <img src="~/assets/images/logo-right.svg" alt="logo icon" />
              </div>
              <div class="about__secure">
                <div class="about__secure-title d-flex align-center">
                  <img src="~/assets/images/secure.svg" alt="about icon" />
                  <p>{{ $t("about.secure") }}</p>
                </div>
                <div
                  class="about__mission-item d-flex align-start"
                >
                  <v-icon color="amber">mdi-star</v-icon>
                  <p>{{ $t("about.secure_item_1") }}</p>
                </div>
                <div
                  class="about__mission-item d-flex align-start"
                >
                  <v-icon color="amber">mdi-star</v-icon>
                  <p>
                    {{ $t("about.secure_item_2") }}
                  </p>
                </div>
                <div
                  class="about__mission-item d-flex align-start"
                >
                  <v-icon color="amber">mdi-star</v-icon>
                  <p>
                    {{ $t("about.secure_item_3") }}
                  </p>
                </div>
                <div
                  class="about__mission-item d-flex align-start"
                >
                  <v-icon color="amber">mdi-star</v-icon>
                  <p>{{ $t("about.secure_item_4") }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </section>

      <section class="section">
        <div class="portfolio" id="portfolio">
          <div class="portfolio__title">
            {{ $t("portfolio.title") }}
          </div>
          <Carousel />
        </div>
      </section>

      <section class="section">
        <div class="info-cards" id="services">
          <div class="info-cards__title text-center">
            {{ $t("what_we.title") }}
          </div>
          <div class="info-cards__body container">
            <v-row>
              <v-col cols="12" lg="3" md="3" sm="6" xs="12">
                <div class="info-cards__item">
                  <div class="item-cards__icon">
                    <img src="~/assets/images/info-1.svg" alt="icon" />
                  </div>
                  <div class="info-cards__text">
                    {{ $t("what_we.card_1") }}
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="3" md="3" sm="6" xs="12">
                <div
                  class="info-cards__item"
                >
                  <div class="item-cards__icon">
                    <img src="~/assets/images/info-2.svg" alt="icon" />
                  </div>
                  <div class="info-cards__text">{{ $t("what_we.card_2") }}</div>
                </div>
              </v-col>
              <v-col cols="12" lg="3" md="3" sm="6" xs="12">
                <div
                  class="info-cards__item"
                >
                  <div class="item-cards__icon">
                    <img src="~/assets/images/info-3.svg" alt="icon" />
                  </div>
                  <div class="info-cards__text">
                    {{ $t("what_we.card_3") }}
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="3" md="3" sm="6" xs="12">
                <div
                  class="info-cards__item"
                >
                  <div class="item-cards__icon">
                    <img src="~/assets/images/info-4.svg" alt="icon" />
                  </div>
                  <div class="info-cards__text">{{ $t("what_we.card_4_1") }}</div>
                  <div class="info-cards__text">{{ $t("what_we.card_4_2") }}</div>
                  <div class="info-cards__text">{{ $t("what_we.card_4_3") }}</div>
                </div>
              </v-col>

              <!-- TEST -->
              <v-col cols="12" lg="3" md="3" sm="6" xs="12">
                <div class="info-cards__item">
                  <div class="item-cards__icon">
                    <img src="~/assets/images/info-1.svg" alt="icon" />
                  </div>
                  <div class="info-cards__text">
                    {{ $t("what_we.card_1") }}
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="3" md="3" sm="6" xs="12">
                <div
                  class="info-cards__item"
                >
                  <div class="item-cards__icon">
                    <img src="~/assets/images/info-2.svg" alt="icon" />
                  </div>
                  <div class="info-cards__text">{{ $t("what_we.card_2") }}</div>
                </div>
              </v-col>
              <v-col cols="12" lg="3" md="3" sm="6" xs="12">
                <div
                  class="info-cards__item"
                >
                  <div class="item-cards__icon">
                    <img src="~/assets/images/info-3.svg" alt="icon" />
                  </div>
                  <div class="info-cards__text">
                    {{ $t("what_we.card_3") }}
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="3" md="3" sm="6" xs="12">
                <div
                  class="info-cards__item"
                >
                  <div class="item-cards__icon">
                    <img src="~/assets/images/info-4.svg" alt="icon" />
                  </div>
                  <div class="info-cards__text">{{ $t("what_we.card_4_1") }}</div>
                  <div class="info-cards__text">{{ $t("what_we.card_4_2") }}</div>
                  <div class="info-cards__text">{{ $t("what_we.card_4_3") }}</div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="prices" id="price">
          <div class="prices__title text-center" data-aos="fade-up">
            {{ $t("price.title") }}
          </div>
          <div class="prices__body container">
            <p class="text-center contact__title">
              {{ $t("contact.title") }}
            </p>
            <v-row justify="center" class="mb-9">
              <v-col cols="12" sm="12" lg="4">
                <p>
                  {{ $t("contact.text") }}
                </p>
              </v-col>
              <v-col cols="12" sm="12" lg="3">
                <div class="name">
                  <v-text-field  :label="$t('contact.name')" dark />
                </div>
              </v-col>
              <v-col cols="12" sm="12" lg="3">
                <div class="lastname name">
                  <v-text-field
                    v-mask="'(##) ### ## ##'"
                    :label="$t('contact.phone')"
                    type="text"
                    dark
                    prefix="+998"
                    :rules="phoneRules"
                    v-model="request.phone"
                  />
                </div>
              </v-col>
            </v-row>
            <div class="d-flex justify-center">
              <v-btn outlined rounded color="amber">{{ $t("contact.btn") }}</v-btn>
            </div>
          </div>
        </div>
      </section>


      <section class="section" style="background: #001122">
        <div>Page Three</div>
      </section>
    </full-page>

  </section>
</template>

<script>
export default {
  data: () => ({

    carousel: null,
    request: {
      phone: null,
      name: '',
      description: '',
    },

    phoneRules: [
      (v) => !!v || "Phone is required",
      (v) => (v && v.length <= 14) || "Name must be less than 12 characters",
    ],
  }),
  methods: {
  }
};
</script>

<style scoped>
.section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}
</style>
