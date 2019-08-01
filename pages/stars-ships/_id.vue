<template>
    <v-flex xs10 md12 lg12>
        <starship-detail class="fwidth" :detail="detail"></starship-detail>
    </v-flex>
</template>

<script>
    import StarshipDetail from '../../components/starship-detail'
    export default {
      name: 'id',
      components: { StarshipDetail },
      async asyncData ({ route, error, store }) {
        try {
          if (store.state.starsShips.length === 0) {
            await store.dispatch('initStarsShips')
            const findCurrent = store.state.starsShips.find(it => it.name === route.params.id)
            const detail = await fetch(findCurrent.url).then(res => res.json())
            return {
              detail
            }
          } else {
            const findCurrent = store.state.starsShips.find(it => it.name === route.params.id)
            const detail = await fetch(findCurrent.url).then(res => res.json())
            return {
              detail
            }
          }
        } catch (e) {
          error({ statusCode: 404, message: 'Страница не найдена' })
        }
      }
    }
</script>

<style scoped>
    .fwidth {
        width: 100%;
    }
</style>
