<template>
  <div class="start container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <h1>Beat a Dragon!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <div class="row">
          <champions v-for="champion in champions" :championData="champion" :key="champion.id"></champions>
        </div>
      </div>
      <div class="col-2 text-center">
        <button class="btn btn-outline-primary" v-if="activeChampion.name && activeDragon.name" @click="startGame()">Start
          Game</button>
      </div>
      <div class="col-5">
        <div class="row">
          <dragons v-for="dragon in dragons" :dragonData="dragon" :key="dragon.id"></dragons>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Champions from '@/components/Champions.vue'
  import Dragons from '@/components/Dragons.vue'
  export default {
    name: "Start",
    mounted() {
      this.$store.dispatch('getChampions')
      this.$store.dispatch('getDragons')
    },
    props: [],
    data() {
      return {}
    },
    computed: {
      champions() {
        return this.$store.state.champions
      },
      dragons() {
        return this.$store.state.dragons
      },
      activeChampion() {
        return this.$store.state.activeChampion
      },
      activeDragon() {
        return this.$store.state.activeDragon
      }
    },
    methods: {
      startGame() {
        let data = {
          dragonId: this.activeDragon.id,
          championId: this.activeChampion.id
        }
        this.$store.dispatch('createGame', data)
      }
    },
    components: {
      Champions,
      Dragons
    }
  }
</script>