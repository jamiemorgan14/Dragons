<template>
  <div class="champions col-4 text-center">
    <div class="card">
      <img class="card-img-top" :src="championData.imgUrl" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{championData.name}}</h5>
        <p class="card-text">Race: {{championData.race}}
          <br>Class: {{championData.class}}
          <hr>HP: {{championData.hp}}</p>
        <button @click="Champion(championData.id)" class="btn btn-primary">Choose Champion</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    props: ['championData'],
    data() {
      return {}
    },
    computed: {},
    methods: {
      ActiveChampion(id)
    },
    components: {}
  }
</script>