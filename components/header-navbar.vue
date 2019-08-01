<template>
    <div class="header-navbar">
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
    </div>
</template>

<script>
    import VuetifyLogo from '../components/VuetifyLogo'
    export default {
        name: 'header-navbar',
        components: {
            VuetifyLogo
        },
        data () {
            return {
                drawer: false,
                appTitle: 'Star Ship',
            }
        }
    }
</script>

<style lang="scss" scoped>
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
