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
  async fetchTickesByUser ({ commit }, userId) {
    try {
      console.log('State Ticktes at fetchTickesByUser:', userId)
      const response = await axios.get(api.url + api.tickets.getAllByIdUser + userId)
      // console.log('reponse: desues api', response.data)
      if (!response || !response.data) {
        response.data = {}
      }
      commit('SetTickets', response.data)
    } catch (error) {
      console.error('Failed to search ticket id:', error)
    }
  },
  async fetchTicketId ({ commit }, TicketId) {
    try {
      const response = await axios.get(api.url + api.tickets.getOneById + TicketId)
      // console.log('reponse: desues api', response.data)
      commit('SetTickets', response.data)
    } catch (error) {
      console.error('Failed to search ticket id:', error)
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
      const response = await axios.post(api.url + api.tickets.nuevaRespuesta + respuesta)
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
