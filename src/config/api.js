export default {
  url: 'http://localhost:8000',
  tickets: {
    default: '/',
    getAll: '/tickets/getAll',
    getOneById: '/tickets/getOneById/',
    getAllByIdUser: '/tickets/getAllByIdUser/',
    getOneByEmail: '/tickets/getOneByEmail/',
    createTicket: '/tickets/createTicket',
    nuevaRespuesta: '/tickets/nuevaRespuesta'
  },
  centro: {
    default: '/centro',
    getall: '/centro/getall'
  },
  tema: {
    default: '/tema',
    getall: '/tema/getall'
  },
  inicioSesion: {
    default: '/login',
    login: '/login/iniciarSesion'
  }
}
