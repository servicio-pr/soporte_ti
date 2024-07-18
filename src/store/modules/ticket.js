import axios from 'axios'

const state = {
  Ticket: [],
  Tickets: {}
}
const getters = {
  Tickets: state => state.Tickets
}
const actions = {
  async nuevoTicket ({ commit }, ticket) {
    try {
      const response = await axios.post('http://localhost:3000/tickets/createTicket', ticket)
      commit('InsertTicket', response)
    } catch (error) {
      console.error('Failed to add ticket:', error)
    }
  },
  async fetchTicketId ({ commit }, ticket) {
    try {
      console.log('-----------antes api-------', ticket)
      const response = await axios.get('http://localhost:3000/tickets/getone', ticket)
      commit('SetTickets', response.data)
      console.log('reponse: desues api', response)
    } catch (error) {
      console.error('Failed to search ticket id:', error)
    }
  }
}
const mutations = {
  InsertTicket: (state, response) => {
    state.Ticket.push(response)
  },
  SetTickets: (state, Tickets) => {
    state.Tickets = Tickets
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
