<template>
    <v-card class="card"
            @click="$router.push({ path: `/stars-ships/${detail.name}`, query: {} })"
    >
        <v-card-title class="title">
            <div>
                <span><strong>Model</strong></span>
                <p>{{ detail.model }}</p>
            </div>
        </v-card-title>
        <v-card-text>
            <div class="card-content">
                <span><strong>Short Title</strong></span>
                <p>{{ detail.manufacturer }}</p>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        props: {
            detail: {
                type: Object,
                required: true
            }
        },
        name: 'starship'
    }
</script>

<style scoped>
    .title {
        background-color: #fb9761;
        color: #fff;
    }

    .card {
        height: 100%;
        min-height: 100%;
    }
</style>
