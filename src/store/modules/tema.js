import axios from 'axios'
import api from '../../config/api'

const state = {
  temas: []
}
const actions = {
  async fetchTemas ({ commit }) {
    try {
      const response = await axios.get(api.url + api.tema.getall)
      commit('setTemas', response.data)
    } catch (error) {
      console.error('Error fetching tema:', error)
    }
  }
}
const mutations = {
  setTemas (state, temas) {
    state.temas = temas
  }
}
const getters = {
  temas: state => state.temas
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
