import axios from 'axios'

const state = {
  centros: [],
  CentroSelect: ''
}
const actions = {
  async fetchCentros ({ commit }) {
    try {
      const response = await axios.get('http://localhost:3000/centro')
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
