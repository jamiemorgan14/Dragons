<template>
  <div class="dragons col-4 text-center">
    <div class="card">
      <img class="card-img-top" :src="dragonData.imgUrl" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{dragonData.name}}</h5>
        <hr>
        <p class="card-text">HP: {{dragonData.currentHP}}</p>
        <button @click="selectDragon(dragonData)" class="btn btn-primary">Choose Dragon</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    props: ['dragonData'],
    data() {
      return {}
    },
    computed: {},
    methods: {
      selectDragon(dragonData) {
        this.$store.dispatch('changeActiveDragon', dragonData)
      }
    },
    components: {}
  }
</script>