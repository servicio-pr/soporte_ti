import axios from 'axios'
import api from '../../config/api'
const state = {
  Tickets: [],
  Ticket: {},
  respuesta: {}
}
const actions = {
  async nuevoTicket ({ commit }, ticket) {
    try {
      const response = await axios.post(api.url + api.tickets.createTicket, ticket)
      commit('InsertTicket', response)
    } catch (error) {
      console.error('Failed to add ticket:', error)
    }
  },
  async fetchTickesByIdUser ({ commit }, userId) {
    try {
      const response = await axios.get(api.url + api.tickets.getAllByIdUser + userId)
      if (response.data.message === 'Exito') {
        commit('SetTickets', response.data.data)
      } else {
        response.data.data = null
      }
      console.log('response by id user', response.data.data)
      return response
    } catch (error) {
      console.error('Failed to search ticket by id user:', error)
    }
  },
  async fetchTicketId ({ commit }, TicketId) {
    try {
      const response = await axios.get(api.url + api.tickets.getOneById + TicketId)
      if (response.data.message === 'Exito') {
        commit('SetTickets', response.data.data)
      } else {
        response.data.data = null
      }
      return response
    } catch (error) {
      console.error('Failed to search ticket by id:', error)
    }
  },
  async fetchTicketEmail ({ commit }, ticket) {
    try {
      // console.log('-----------antes api-------', ticket)
      const response = await axios.get('http://localhost:3000/tickets/getOneByEmail/:{{ ticket }}')
      commit('SetTickets', response.data)
      // console.log('reponse: desues api', response)
    } catch (error) {
      console.error('Failed to search ticket id:', error)
    }
  },
  async nuevaRespuesta ({ commit }, respuesta) {
    try {
      const response = await axios.post(api.url + api.tickets.nuevaRespuesta, respuesta)
      commit('InsertRespuesta', response)
    } catch (error) {
      console.log('Error insertando respuesta', error)
    }
  }
}
const mutations = {
  InsertTicket: (state, response) => {
    state.Ticket = response
  },
  SetTickets: (state, ticket) => {
    state.Tickets = ticket
  },
  InsertRespuesta: (state, res) => {
    state.respuesta = (res)
  }
}
const getters = {
  Tickets: state => state.Tickets
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
