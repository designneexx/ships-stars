<template>
  <v-app>
    <header-navbar></header-navbar>
    <v-container grid-list-md text-center style="margin-top: 65px; margin-bottom: 65px;">
      <nuxt></nuxt>
    </v-container>
    <v-footer class="footer-site" fixed app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>

  import HeaderNavbar from "../components/header-navbar";
  export default {
    components: {HeaderNavbar},
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>

</style>
