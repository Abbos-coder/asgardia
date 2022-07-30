<template>
  <div>
    <section class="header" id="main">
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
    </section>

    <div class="grey darken-3" id="about">
      <v-row class="about">
        <v-col class="white block-left d-flex flex-column align-center pr-16" cols="12" lg="6">
          <div class="about__logo-left">
            <img src="~/assets/images/logo-left.svg" alt="logo icon" />
          </div>
          <div class="about__mission">
            <div class="about__mission-title d-flex align-center">
              <img src="~/assets/images/rocket.svg" alt="about icon" />
              <p data-aos="fade-up">{{ $t("about.mission") }}</p>
            </div>
            <div
              class="about__mission-item d-flex align-start"
              data-aos="fade-right"
            >
              <v-icon color="amber">mdi-star</v-icon>
              <p>
                {{ $t("about.mission_item_1") }}
              </p>
            </div>
            <div
              class="about__mission-item d-flex align-start"
              data-aos="fade-right"
            >
              <v-icon color="amber">mdi-star</v-icon>
              <p>
                {{ $t("about.mission_item_2") }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col class="grey darken-4 block-right d-flex flex-column align-center" cols="12" lg="6" id="secure">
          <div class="about__logo-right">
            <img src="~/assets/images/logo-right.svg" alt="logo icon" />
          </div>
          <div class="about__secure">
            <div class="about__secure-title d-flex align-center">
              <img src="~/assets/images/secure.svg" alt="about icon" />
              <p data-aos="fade-up">{{ $t("about.secure") }}</p>
            </div>
            <div
              class="about__mission-item d-flex align-start"
              data-aos="fade-left"
            >
              <v-icon color="amber">mdi-star</v-icon>
              <p>{{ $t("about.secure_item_1") }}</p>
            </div>
            <div
              class="about__mission-item d-flex align-start"
              data-aos="fade-left"
            >
              <v-icon color="amber">mdi-star</v-icon>
              <p>
                {{ $t("about.secure_item_2") }}
              </p>
            </div>
            <div
              class="about__mission-item d-flex align-start"
              data-aos="fade-left"
            >
              <v-icon color="amber">mdi-star</v-icon>
              <p>
                {{ $t("about.secure_item_3") }}
              </p>
            </div>
            <div
              class="about__mission-item d-flex align-start"
              data-aos="fade-left"
            >
              <v-icon color="amber">mdi-star</v-icon>
              <p>{{ $t("about.secure_item_4") }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="portfolio" id="portfolio">
      <div class="portfolio__title" data-aos="fade-up">
        {{ $t("portfolio.title") }}
      </div>
      <Carousel data-aos="zoom-in" />
    </div>

    <div class="info-cards" id="services">
      <div class="info-cards__title text-center" data-aos="fade-up">
        {{ $t("what_we.title") }}
      </div>
      <div class="info-cards__body container">

        <v-row>
          <v-col cols="12" lg="3" md="3" sm="6" xs="12">
            <div
              class="info-cards__item"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
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
              data-aos="fade-up"
              data-aos-duration="1500"
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
              data-aos="fade-up"
              data-aos-duration="2000"
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
              data-aos="fade-up"
              data-aos-duration="2500"
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




    <div id="contact"></div>
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
          <v-col>
            <v-form>
              <v-row>
                <v-col cols="12" sm="6" lg="6">
                  <div class="name">
                    <v-text-field outlined v-model="request.name" :rules="nameRules" :label="$t('contact.name')" dark />
                  </div>
                </v-col>
                <v-col cols="12" sm="6" lg="6">
                  <div class="lastname name">
                    <v-text-field
                      outlined
                      v-mask="'#########'"
                      :label="$t('contact.phone')"
                      type="text"
                      dark
                      prefix="+998"
                      :rules="phoneRules"
                      v-model="phone"
                    />
                  </div>
                </v-col>
                <v-col cols="12" sm="12" lg="12" md="12">
                  <div class="lastname desc">
                    <v-text-field
                      outlined
                      v-model="request.description"
                      counter
                      :rules="desc"
                      maxlength="300"
                      :label="$t('contact.description')"
                      dark
                    />
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
        <div class="d-flex justify-center">
          <v-btn outlined rounded color="amber" @click="sendRequest">{{ $t("contact.btn") }}</v-btn>
        </div>
      </div>
    </div>

    <div class="partners">
      <div class="partners__title text-center text-uppercase">{{$t("partners.title")}}</div>
      <div class="partners__subtitle text-center text-uppercase">{{$t("partners.subtitle")}}</div>
      <div class="partners__body">
        <PartnersCarousel/>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  scrollToTop: true,
  name: "IndexPage",
  data: () => ({
    valid: true,
    carousel: null,
    phone: null,
    request: {
      phone: null,
      name: '',
      description: '',
    },
    desc: [v => v.length <= 300 || 'Max 300 characters'],
    phoneRules: [
      // (v) => !!v || "Phone is required",
      // (v) => (v && v.length <= 14) || "Name must be less than 12 characters",
    ],
    nameRules: [
      // (v) => !!v || "Phone is required",
    ]
  }),
  watch: {
    phone(val) {
      this.request.phone = `+998${val}`
    }
  },
  methods: {
    sendRequest() {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }
      const name = this.request.name;
      const phone = this.request.phone
      if(!!name && !!phone ) {
        this.$axios.$post('/api/v1/request', this.request, config).then(req => {
          if (req) {
            this.$toast.success('Ваша заявка отправлена', {
              theme: 'bubble',
            })
          }
          this.request.name = "",
            this.request.description = "",
            this.phone = "";
        })
      }

    }
  },
  mounted() {
     // VANTA.NET({
     //   el: "#secure",
     //   mouseControls: true,
     //   touchControls: true,
     //   gyroControls: false,
     //   minHeight: 200.0,
     //   minWidth: 200.0,
     //   scale: 1.0,
     //   scaleMobile: 1.0,
     //   color: 0x3fff60,
     //   backgroundColor: 0x000e2d,
     // });


  },
};
</script>

<style lang="scss" scoped>

.theme--light {
  background: transparent !important;
}

</style>
