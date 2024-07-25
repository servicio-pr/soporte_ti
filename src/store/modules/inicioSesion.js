import axios from 'axios'
import api from '../../config/api'

const state = {
  user: null
}
const actions = {
  async iniciarSesion ({ commit }, user) {
    try {
      const response = await axios.post(api.url + api.inicioSesion.login, user)
      const usuario = response.data.user
      // console.log('Response:::', response)
      commit('setUser', usuario)
      return response
    } catch (error) {
      console.error('Error Al iniciar sesion', error)
    }
  },
  cerrarSesion ({ commit }) {
    sessionStorage.removeItem('token')
    commit('setUser', null)
  }
}
const mutations = {
  setUser (state, usuario) {
    state.user = usuario
  }
}
const getters = {
  user: state => state.user
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
