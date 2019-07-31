<template>
    <v-card
    >
        <v-card-text>
            <div class="card-content">
                <span><strong>Model</strong></span>
                <p>{{ detail.model }}</p>
                <span><strong>Name</strong></span>
                <p>{{ detail.name }}</p>
                <span><strong>Short Title</strong></span>
                <p>{{ detail.manufacturer }}</p>
                <span><strong>Date created</strong></span>
                <p>{{ detail.created }}</p>
                <span><strong>Star ship class</strong></span>
                <p>{{ detail.starship_class }}</p>
                <span><strong>Passengers</strong></span>
                <p>{{ detail.passengers }}</p>
                <span><strong>Consumables</strong></span>
                <p>{{ detail.consumables }}</p>
                <span><strong>Crew</strong></span>
                <p>{{ detail.crew }}</p>
                <span><strong>Cost in credits</strong></span>
                <p>{{ detail.cost_in_credits }}</p>
                <span><strong>Edited</strong></span>
                <p>{{ detail.edited }}</p>
                <span><strong>Length</strong></span>
                <p>{{ detail.length }}</p>
                <span><strong>Manufacturer</strong></span>
                <p>{{ detail.manufacturer }}</p>
                <span><strong>Max atmosphering speed</strong></span>
                <p>{{ detail.max_atmosphering_speed }}</p>
                <span><strong>Hyperdrive rating</strong></span>
                <p>{{ detail.hyperdrive_rating }}</p>
                <span><strong>Cargo capacity</strong></span>
                <p>{{ detail.cargo_capacity }}</p>
                <span><strong>MGLT</strong></span>
                <p>{{ detail.MGLT }}</p>
                <span><strong>Films</strong></span>
                <v-list three-line>
                    <template v-if="detail.films.length === 0">
                        <p>No Films</p>
                    </template>
                    <template v-for="(film,i) in detail.films">
                        <li :key="i">
                            {{ film }}
                        </li>
                    </template>
                </v-list>
                <span><strong>Pilots</strong></span>
                <v-list three-line>
                    <template v-if="detail.pilots.length === 0">
                        <p>No Pilots</p>
                    </template>
                    <template v-for="(pilot,i) in detail.pilots">
                        <li :key="i">
                            {{ pilot }}
                        </li>
                    </template>
                </v-list>
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

</style>
