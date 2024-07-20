import axios from 'axios'
import api from '../../config/api'

const state = {
  centros: [],
  CentroSelect: ''
}
const actions = {
  async fetchCentros ({ commit }) {
    try {
<<<<<<< HEAD
      const response = await axios.get(api.url + api.centro.getall)
=======
      const response = await axios.get('http://localhost:8000/centro')
>>>>>>> d0aea5575eed16002c00f8952060536a939df0a0
      commit('setCentros', response.data)
    } catch (error) {
      console.error('Error fetching centro:', error)
    }
  }
}
const mutations = {
  setCentros (state, centros) {
    state.centros = centros
  }
}
const getters = {
  centros: state => state.centros
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
