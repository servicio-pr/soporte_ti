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
<<<<<<< HEAD
      if (response.status === 200) {
        const usuario = response.data.user
        commit('setUser', usuario)
        commit('setAuthenticated', true)
        console.log('response:::', response)
      }
      return response
=======
      if (response.status === 401) {
        console.log('Error: ', response.status.message)
        return null
      } else {
        const usuario = response.data.user
        commit('setUser', usuario)
        commit('setAuthenticated', true)
        return response
      }
>>>>>>> 056742527dbd58444578662e81773ae0d8baac0c
    } catch (error) {
      console.error('Error Al iniciar sesion and response.data', error.response.data)
      return error.response.data
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
