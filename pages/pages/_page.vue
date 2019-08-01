<script>
    export default {
        layout: 'stars-ships',
        async asyncData ({ store }) {
            try {
                if (store.state.starsShips.length !== 0) return {};
                await store.dispatch('initStarsShips')

                return {}
            } catch (e) {
                console.log(e)
            }
        },
        validate ({ params }) {
            return !isNaN(+params.page)
        }
    }
</script>
