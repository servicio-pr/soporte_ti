import axios from 'axios'
import api from '../../config/api'

const state = {
  user: {
    id: null,
    nombre: null,
    correo: null,
    id_rol: null,
    typeUser: null
  },
  isAuthenticated: false
}
const actions = {
  async iniciarSesion ({ commit }, user) {
    try {
      const response = await axios.post(api.url + api.inicioSesion.login, user)
      if (response.status === 401) {
        console.log('Error: ', response.status.message)
        return null
      } else {
        const usuario = response.data.user
        commit('setUser', usuario)
        commit('setAuthenticated', true)
        return response
      }
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
  },
  clearUser (state) {
    state.user = {
      id: null,
      nombre: null,
      correo: null,
      id_rol: null
    }
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
