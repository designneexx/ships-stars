<template>
    <v-app>
        <header-navbar></header-navbar>
        <v-container grid-list-md text-center style="margin-top: 65px; margin-bottom: 65px;">
            <v-layout class="layout-stars" wrap>
                <v-flex class="search" xs10 sm12 md12>
                    <h1>Search</h1>
                    <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                            class="form-search"
                    >
                        <v-text-field
                                v-model="searched"
                                :counter="25"
                                :rules="rules"
                                label="Search Stars Ships"
                                required
                        ></v-text-field>

                        <v-btn
                                :disabled="!valid"
                                color="success"
                                class="mr-4"
                                @click="validate"
                        >
                            Search
                        </v-btn>

                        <v-btn
                                color="error"
                                class="mr-4"
                                @click="reset"
                        >
                            Reset
                        </v-btn>
                    </v-form>
                </v-flex>
                <pagination
                        :max-button-count="4"
                        :max-elements-page="4"
                        :items="searchedStarsShips($route)"
                        path="/pages"
                        :current-page="currentPage"
                >
                    <template v-slot:articles="pagination">
                        <v-layout class="layout" wrap>
                            <v-flex class="star-ship" xs10 md12 lg3 v-for="starShip in pagination.elements" :key="starShip.name">
                                <starship :detail="starShip"></starship>
                            </v-flex>
                        </v-layout>
                    </template>
                </pagination>
            </v-layout>
        </v-container>
        <v-footer class="footer-site" fixed app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
    import Starship from '../components/starship'
    import { mapGetters } from 'vuex'
    import Pagination from "../components/pagination";
    import HeaderNavbar from "../components/header-navbar";
    export default {
        components: {
            HeaderNavbar,
            Pagination, Starship
        },
        data () {
            return {
                drawer: false,
                appTitle: 'Star Ship',
                starShip: {},
                searched: '',
                valid: '',
                rules: [
                    v => !!v || 'Search field is required',
                    v => (v && v.length <= 25) || 'Search must be less than 25 characters'
                ]
            }
        },
        computed: {
            ...mapGetters({
                searchedStarsShips: 'getSearchedStarsShips'
            }),
            currentPage() {
                if(this.$route.params && this.$route.params.page) return +this.$route.params.page;
                return 1;
            }
        },
        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                    this.$router.push({ path: '/', query: { search: this.searched } })
                }
            },
            reset () {
                this.resetValidation()
                this.$refs.form.reset()
                this.$router.replace('/');
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
        }
    }
</script>

<style lang="scss" scoped>
    .form-search {
        width: 100%;
    }

    .star-ship {
        cursor: pointer;
        margin-bottom: 30px;
    }

    .layout-stars {
        align-items: stretch;
        align-content: flex-start;
    }

    .search {
        margin-bottom: 35px;
        max-height: max-content;
    }
</style>
