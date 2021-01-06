<template>
  <div>
    <header class="header" :class="open">
      <div class="overlay has-fade" :class="hamburger"></div>
      <nav class="flex flex-jc-sb flex-ai-c">
        <div class="header__links hide-for-mobile">
          <a href="#">Home</a><a href="#">About</a>
        </div>
        <a class="header__toggle hide-for-desktop has-fade">
          <span></span>
          <span></span>
          <span></span>
        </a>
        <img class="header__logo" @click="reset" src="@/assets/images/imacakes.jpg">
        <a href="#" @click="toggling" class="header__toggle hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div class="header__links hide-for-mobile">
          <a href="#">Contact</a><a href="#">Blog</a><a href="#">Careers</a>
        </div>
      </nav>
      <div class="header__menu" :class="menu">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
        <a href="">Careers</a>
      </div>
    </header>
    <main>
      <card v-for="cake in cakes" v-if="!category ? true : cake.category == category" :key="cake.id">
        <nuxt-link :to="`/cakes/${cake.id}`">
          <img class="menu-image" :src="cake.thumbnail">
          <section class="menu-section">
            <h3>{{cake.name}}</h3>
            <h3>{{cake.price}}</h3>
            <div class="ratings">
              <img v-for="star in cake.stars" :key="star" class="stars" src="@/assets/images/star.svg">
              <img v-for="star in cake.zerostars" class="stars" :key="star" src="@/assets/images/zero-star.svg">
            </div>
          </section>
        </nuxt-link>
      </card>
    </main>
    <footer class="slider">
      <card-slider @click.native="prev" :class="fadeone" class="first-slider" :style="first_style">{{first}}
      </card-slider>
      <card-slider class="second-slider" :style="second_style">{{second}}</card-slider>
      <card-slider @click.native="next" :class="fadethree" class="third-slider" :style="third_style">{{third}}
      </card-slider>
    </footer>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";

  export default {
    data() {
      return {
        category: false,

        toggle: false,
        hamburger: "",
        open: "",
        menu: "has-fade",
        fadeone: "",
        fadethree: "",
        first_style: "background: deepskyblue",
        second_style: "background: seashell",
        third_style: "background: pink",
        first: "Dessert",
        second: "Savory",
        third: "Cookies"
      }
    },
    methods: {
      reset() {
        this.category = false;
      },
      next() {
        this.fadeone = "fade-in"
        this.fadetwo = "fade-in"
        this.fadethree = "fade-in"
        if (this.first == "Dessert") {
          this.first = "Savory"
          this.second = "Cookies"
          this.third = "Dessert"
          this.first_style = "background: seashell"
          this.second_style = "background: pink"
          this.third_style = "background: deepskyblue"
        } else if (this.first == "Savory") {
          this.first = "Cookies"
          this.second = "Dessert"
          this.third = "Savory"
          this.first_style = "background: pink"
          this.second_style = "background: deepskyblue"
          this.third_style = "background: seashell"
        } else {
          this.first = "Dessert"
          this.second = "Savory"
          this.third = "Cookies"
          this.first_style = "background: deepskyblue"
          this.second_style = "background: seashell"
          this.third_style = "background: pink"
        }
        this.category = this.second.toLowerCase()
      },
      prev() {
        this.fadeone = "fade-in"
        this.fadetwo = "fade-in"
        this.fadethree = "fade-in"
        if (this.first == "Dessert") {
          this.first = "Savory"
          this.second = "Cookies"
          this.third = "Dessert"
          this.first_style = "background: seashell"
          this.second_style = "background: deepskyblue"
          this.third_style = "background: pink"
        } else if (this.first == "Cookies") {
          this.first = "Dessert"
          this.second = "Savory"
          this.third = "Cookies"
          this.first_style = "background: deepskyblue"
          this.second_style = "background: seashell"
          this.third_style = "background: pink"
        } else {
          this.first = "Cookies"
          this.second = "Dessert"
          this.third = "Savory"
          this.first_style = "background: deepskyblue"
          this.second_style = "background: pink"
          this.third_style = "background: seashell"
        }
        this.category = this.second.toLowerCase()

      },
      toggling() {
        if (this.toggle == false) {
          this.hamburger = "fade-in"
          this.menu = "fade-in"
          this.open = "open"
          this.toggle = true
        } else {
          this.hamburger = "fade-out"
          this.menu = "fade-out"
          this.open = ""
          this.toggle = false
        }
      }
    },
    computed: mapGetters({
      cakes: "dataCakes"
    }),

  }
</script>