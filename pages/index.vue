<template>
    <v-layout class="layout" wrap>
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
        <v-flex class="star-ship" xs10 md12 lg3 v-for="starShip in searchedStarsShips($route)" :key="starShip.name">
            <starship :detail="starShip"></starship>
        </v-flex>
    </v-layout>
</template>

<script>
    import Starship from '../components/starship'
    import { mapGetters } from 'vuex'
    export default {
      components: { Starship },
      async asyncData ({ store }) {
        try {
          if (store.state.starsShips.length !== 0) return {};
          await store.dispatch('initStarsShips')
          return {}
        } catch (e) {
          console.log(e)
        }
      },
      data () {
        return {
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
        })
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
        }
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

    .layout {
        align-items: stretch;
    }

    .search {
        margin-bottom: 35px;
    }
</style>
