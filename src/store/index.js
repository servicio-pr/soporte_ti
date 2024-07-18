import { createStore } from 'vuex'
import ticket from './modules/ticket'
import tema from './modules/tema'
import centro from './modules/centro'

export default createStore({
  modules: {
    ticket,
    tema,
    centro
  }
})
