import axios from 'axios'

const state = {
  temas: []
}
const actions = {
  async fetchTemas ({ commit }) {
    try {
      const response = await axios.get('http://localhost:3000/tema')
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
