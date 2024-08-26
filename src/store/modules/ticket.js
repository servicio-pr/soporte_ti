import axios from 'axios'
import api from '../../config/api'
const state = {
  oneTicket: {},
  Tickets: [],
  Ticket: {},
  respuesta: {},
  Respuestas: [],
  showNuevoTicket: true,
  showEstatusTicket: true,
  showAlertTicketNo: false,
  showAlertTicketOk: false,
  permiso: '',
  asignarAnalista: '',
  evidencas: []
}
const actions = {
  async AshowAlertTicketNo ({ commit }, status) {
    commit('SetshowAlertTicketNo', status)
  },
  async AshowAlertTicketOk ({ commit }, status) {
    commit('SetshowAlertTicketOk', status)
  },
  async nuevoTicket ({ commit }, ticket) {
    try {
      const response = await axios.post(api.url + api.tickets.createTicket, ticket)
      commit('InsertTicket', response)
      return response.data.insertId
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
        commit('SetOneTicket', response.data.data)
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
  async fetchAllTicketsSinAnalista ({ commit }) {
    try {
      const response = await axios.get(api.url + api.tickets.getAllWithoutAnalist)
      if (response.data.message === 'Exito') {
        commit('SetTickets', response.data.data)
      } else {
        response.data.data = null
      }
      console.log('response by id user', response.data.data)
      return response
    } catch (error) {
      console.error('Failed to search ticket without analist:', error)
    }
  },
  async fetchAllTicketsAnalista ({ commit }, userId) {
    try {
      const response = await axios.get(api.url + api.tickets.getAllWithAnalist + userId)
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
  async nuevaRespuesta ({ commit }, respuesta) {
    try {
      const response = await axios.post(api.url + api.tickets.nuevaRespuesta, respuesta)
      commit('InsertRespuesta', response)
      const message = 'Exito'
      response.message = message
      return response
    } catch (error) {
      console.log('Error insertando respuesta', error)
    }
  },
  async AsignarTicket ({ commit }, asignar) {
    const response = await axios.post(api.url + api.tickets.asignarAnalista, asignar)
    commit('InsertAsignar', response)
    const message = 'Exito'
    response.message = message
    return (response)
  },
  async evidenciaTicket ({ commit }, idTicket) {
    try {
      const response = await axios.get(api.url + api.tickets.getEvidencias + idTicket)
      commit('SetEvidencia', response)
      const message = 'Exito'
      response.message = message
    } catch (error) {
      console.log('Error get evidencias', error)
    }
  },
  async fetchResTicketId ({ commit }, ticketId) {
    try {
      const response = await axios.get(api.url + api.tickets.getAllResByTicketId + ticketId)
      if (response.data.message === 'Exito') {
        commit('SetRespuestas', response.data.data)
      } else {
        response.data.data = null
      }
      return response
    } catch (error) {
      console.error('Failed to search Responses by ticket id:', error)
    }
  },
  async showComponentNT ({ commit }, state) {
    try {
      commit('ShowComponentNT', state)
    } catch (e) {
      console.log('Error cambiando estatus SNT')
    }
  },
  async showComponentST ({ commit }, state) {
    try {
      commit('ShowComponentST', state)
    } catch (e) {
      console.log('Error cambiando estatus SET')
    }
  }
}
const mutations = {
  InsertTicket: (state, response) => {
    state.Ticket = response
  },
  SetOneTicket: (state, oneTicket) => {
    state.oneTicket = oneTicket
  },
  SetTickets: (state, ticket) => {
    state.Tickets = ticket
  },
  SetRespuestas: (state, Respuestas) => {
    state.Respuestas = Respuestas
  },
  InsertRespuesta: (state, res) => {
    state.respuesta = (res)
  },
  SetEvidencia: (state, res) => {
    state.evidencas = (res)
  },
  ShowComponentNT: (state, value) => {
    state.showNuevoTicket = value
  },
  ShowComponentST: (state, value) => {
    state.showEstatusTicket = value
  },
  SetshowAlertTicketNo: (state, value) => {
    state.showAlertTicketNo = value
  },
  SetshowAlertTicketOk: (state, value) => {
    state.showAlertTicketOk = value
  },
  InsertAsignar: (state, value) => {
    state.asignarAnalista = value
  }
}
const getters = {
  Tickets: state => state.Tickets,
  oneTicket: state => state.oneTicket
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
