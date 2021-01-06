<template>
  <div>
    <header class="header">
      <nav class="flex flex-jc-c flex-ai-c">
        <img class="header__logo" src="@/assets/images/imacakes.jpg">
        <a href="#" class="header__toggle hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </nav>
    </header>
    <main>
      <card v-for="cake in datas" :key="cake.id"><img class="menu-image" :src="cake.thumbnail">
        <section class="menu-section">
          <h3>{{cake.name}}</h3>
          <h3>{{cake.price}}</h3>
          <div class="ratings">
            <img v-for="star in cake.stars" :key="star" class="stars" src="@/assets/images/star.svg">
            <img v-for="star in cake.zerostars" class="stars" :key="star" src="@/assets/images/zero-star.svg">
          </div>
        </section>
      </card>
    </main>
    <!-- <footer>
      You can find us on these platforms!
      <section class="footer-section">
        <img class="platforms" src="@/assets/images/evermos.png">
        <img class="platforms" src="@/assets/images/instagram.svg">
        <img class="platforms" src="@/assets/images/facebook.svg">
        <img class="platforms" src="@/assets/images/grab.svg">
      </section>
    </footer> -->
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

      }
    },
    computed: mapGetters({
      datas: "dataCakes"
    }),
  }
</script>


<style lang="scss" scoped>

</style>