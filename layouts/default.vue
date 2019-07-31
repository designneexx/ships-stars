<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <VuetifyLogo></VuetifyLogo>
      <v-list class="list">
        <li><nuxt-link class="list-link" to="/">Все корабли</nuxt-link></li>
      </v-list>
    </v-navigation-drawer>
    <header class="header-site">
      <v-toolbar class="toolbar" app>
        <v-toolbar-title @click="drawer = !drawer">
          <div>
            <v-icon>fas fa-bars</v-icon>
            {{ appTitle }}
          </div>
        </v-toolbar-title>
      </v-toolbar>
    </header>
    <v-container grid-list-md text-center style="margin-top: 65px; margin-bottom: 65px;">
      <nuxt></nuxt>
    </v-container>
    <v-footer class="footer-site" fixed app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import VuetifyLogo from '../components/VuetifyLogo'

  export default {
    components: {
      VuetifyLogo
    },
    data () {
      return {
        drawer: false,
        appTitle: 'Star Ship'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer-site {
    background-color: #fff;
    padding: 25px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #b8bfcc;
  }

  .header-site {
    height: 65px;
  }

  .list {
    width: 100%;
    li {
      width: 100%;
      .list-link {
        width: 100%;
        padding: 25px 24px 20px;
        background-color: #f0f0f0;
        text-decoration: none;
        display: block;
        box-sizing: border-box;
      }
    }
  }

  .toolbar {
    cursor: pointer;
  }

  .container {
    flex: initial;
  }
</style>
