import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js'

let _api = Axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragons: [],
    activeDragon: [],
    champions: [],
    activeChampion: [],
    activeGame: []
  },
  mutations: {
    setDragons(state, data) {
      state.dragons = data
    },
    setActiveDragon(state, data) {
      state.activeDragon = data
    },
    setChampions(state, data) {
      state.champions = data
    },
    setActiveChampion(state, data) {
      state.activeChampion = data
    },
    setActiveGame(state, data) {
      state.activeGame = data
    }
  },
  actions: {
    getDragons({ commit, dispatch }) {
      _api.get('dragons')
        .then(res => {
          commit('setDragons', res.data)
        })
    },
    getChampions({ commit, dispatch }) {
      _api.get('champions')
        .then(res => {
          commit('setChampions', res.data)
        })
    },
    getGame({ commit, dispatch }, payload) {
      _api.get('games/' + payload)
        .then(res => {
          commit('setActiveGame', res.data)
          commit('setActiveChampion', res.data._champion)
          commit('setActiveDragon', res.data._dragon)
        })
    },
    attack({ commit, dispatch }, payload) {
      _api.put('games/' + payload._id, payload)
        .then(res => {
          commit('setActiveGame', res.data)
        })
    },
    createGame({ commit, dispatch }, payload) {
      _api.post('games', payload)
        .then(res => {
          commit('setActiveGame', res.data.game)
          commit('setActiveChampion', res.data.game._champion)
          commit('setActiveDragon', res.data.game._dragon)
          router.push({ name: 'Game', params: { id: res.data.game._id } })
        })
    },
    changeActiveChampion({ commit, dispatch }, payload) {
      commit('setActiveChampion', payload)
    },
    changeActiveDragon({ commit, dispatch }, payload) {
      commit('setActiveDragon', payload)
    }
  }
})
