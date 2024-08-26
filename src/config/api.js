export default {
  url: 'http://localhost:8000',
  tickets: {
    default: '/',
    getAll: '/tickets/getAll/',
    getAllWithoutAnalist: '/tickets/getAllWithoutAnalist/',
    getAllWithAnalist: '/tickets/getAllWithAnalist/',
    getOneById: '/tickets/getOneById/',
    getAllByIdUser: '/tickets/getAllByIdUser/',
    getOneByEmail: '/tickets/getOneByEmail/',
    getAllResByTicketId: '/tickets/getAllResByTicketId/',
    getEvidencias: '/tickets/getEvidencias/',
    createTicket: '/tickets/createTicket',
    nuevaRespuesta: '/tickets/nuevaRespuesta',
    asignarAnalista: '/tickets/asignarAnalista'
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
