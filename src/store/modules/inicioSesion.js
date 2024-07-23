import axios from 'axios'
import api from '../../config/api'

const state = {
  users: []
}
const actions = {
  async iniciarSesion ({ commit }, user) {
    try {
      const response = await axios.post(api.url + api.inicioSesion.login, user)
      commit('setUser', response.data)
    } catch (error) {
      console.error('Error Al iniciar sesion', error)
    }
  }
}
const mutations = {
  setUser (state, usuario) {
    state.users = usuario
  }
}
const getters = {
  users: state => state.users
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
