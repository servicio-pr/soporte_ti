import axios from 'axios'
import api from '../../config/api'

const state = {
  temas: []
}
const actions = {
  async fetchTemas ({ commit }) {
    try {
<<<<<<< HEAD
      const response = await axios.get(api.url + api.tema.getall)
=======
      const response = await axios.get('http://localhost:8000/tema')
>>>>>>> d0aea5575eed16002c00f8952060536a939df0a0
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
