<script>
    import Starship from '../components/starship'
    import { mapGetters } from 'vuex'
    import Pagination from "../components/pagination";
    export default {
      layout: 'stars-ships',
      components: {Pagination, Starship },
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
