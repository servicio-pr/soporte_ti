import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

const token = sessionStorage.getItem('token')
if (token) {
  try {
    const decoded = jwtDecode(token)
    store.commit('inicioSesion/setUser', decoded.user)
  } catch (error) {
    console.error('Error al decodificar el token:', error)
    sessionStorage.removeItem('token')
  }
}

createApp(App).use(store).use(router).mount('#app')
