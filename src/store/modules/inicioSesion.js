import axios from 'axios'
import api from '../../config/api'

const state = {
  user: null,
  isAuthenticated: false
}
const actions = {
  async iniciarSesion ({ commit }, user) {
    try {
      const response = await axios.post(api.url + api.inicioSesion.login, user)
      const usuario = response.data.user
      // console.log('Response:::', response)
      commit('setUser', usuario)
      commit('setAuthenticated', true)
      return response
    } catch (error) {
      console.error('Error Al iniciar sesion', error)
    }
  },
  cerrarSesion ({ commit }) {
    sessionStorage.removeItem('token')
    commit('setUser', null)
    commit('setAuthenticated', false)
  }
}
const mutations = {
  setUser (state, usuario) {
    state.user = usuario
  },
  setAuthenticated (state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  }
}
const getters = {
  user: state => state.user,
  isAuthenticated: state => state.isAuthenticated
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
