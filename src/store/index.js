import { createStore } from 'vuex'
import ticket from './modules/ticket'
import tema from './modules/tema'
import centro from './modules/centro'
import inicioSesion from './modules/inicioSesion'

export default createStore({
  modules: {
    ticket,
    tema,
    centro,
    inicioSesion
  }
})
