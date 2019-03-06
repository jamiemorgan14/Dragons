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
      <div class="col-5 offset-2">
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
      }
    },
    methods: {},
    components: {
      Champions,
      Dragons
    }
  }
</script>