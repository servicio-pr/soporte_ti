<template>
    <div class="container-fluid bs-body-bg">
      <div class="row">
        <div class="col">
          <div class="card text-bg-dark border dark-border-subtle rounded-4">
            <div class="title-card">
              <h3 class="h3">Hola {{ user.nombre }}, bienvenido de nuevo</h3>

              <div class="row">
                <div class="col">
                  <ul class="list-group text-bg-dark">
                    <li class="list-group-item text-bg-dark">
                      <span class="label">Nombre:</span> <span class="value">{{ user.nombre }}</span>
                    </li>
                    <li class="list-group-item text-bg-dark">
                      <span class="label">Número de registro:</span>
                      <span class="value">{{ user.id }}</span>
                    </li>
                    <li class="list-group-item text-bg-dark">
                      <span class="label">Lugar de trabajo:</span>
                      <span class="value">##Lugar de trabajo##</span>
                    </li>
                    <li class="list-group-item text-bg-dark">
                      <span class="label">Puesto:</span>
                      <span class="value">{{ user.puesto }}</span>
                    </li>
                    <li v-if="user.permiso === 3" class="list-group-item text-bg-dark">
                      <span class="label">Tickets asignados:</span>
                      <span class="value">{{ user.ticketsAsignados }}</span>
                    </li>
                  </ul>
                </div>
                <div class="col">
                  <ul class="list-group text-bg-dark">
                    <li class="list-group-item text-bg-dark">
                      <span class="label">Fecha de creación:</span>
                      <span class="value">{{ user.creado_fecha }}</span>
                    </li>
                    <li class="list-group-item text-bg-dark">
                      <span class="label">Fecha de actualización:</span>
                      <span class="value">{{ user.actualizado }}</span>
                    </li>
                    <li class="list-group-item text-bg-dark">
                      <span class="label">Creado por usuario:</span>
                      <span class="value">{{ user.id_creado_usuario }}</span>
                    </li>
                    <li class="list-group-item text-bg-dark">
                      <span class="label">Número de tickets:</span>
                      <span class="value">{{ user.numeroTickets }}</span>
                    </li>
                    <li v-if="user.permiso === 3" class="list-group-item text-bg-dark">
                      <span class="label">Tickets resueltos:</span>
                      <span class="value">{{ user.ticketsCerrados }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="card-body">
              <table class="table table-dark table-striped">
                <thead>
                  <tr v-if="showTickets">
                    <th scope="col">Número</th>
                    <th scope="col">Título</th>
                    <th scope="col">Estatus</th>
                    <th scope="col">Fecha de solicitud</th>
                    <th scope="col">Fecha de la última respuesta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="Tickets.lenght === 0">
                    <td v-if="Tickets.numeroTickets === 0" colspan="9">Aún no ha creado tickets.</td>
                  </tr>
                  <tr v-for="ticket in Tickets" :key="ticket.id">
                    <td>
                      <button
                      class="btn btn-outline-primary"
                      type="submit"
                      @click="BuscarTicket(ticket.id)"
                      >
                        {{ ticket.id }}
                    </button>
                    </td>
                    <td>{{ ticket.titulo }}</td>
                    <td>{{ ticket.estatus }}</td>
                    <td>{{ ticket.creado_fecha }}</td>
                    <td>{{ ticket.fecha_respuesta }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="row" v-if="user.permiso === 3">
                <button
                  class="btn btn-outline-primary"
                  @click="TicketsSinAnalista"
                  type="button">
                  Mostrar tickets sin asignar
                </button>
              </div>
              <div class="row" v-if="user.permiso === 3">
                <button
                  class="btn btn-outline-success"
                  @click="getTicketsAsignados"
                  type="button">
                  Mostrar Tickes asignados
                </button>
              </div>
              <div class="row" v-if="user.numeroTickets === 0">
                <button
                class="btn btn-outline-primary"
                @click="NuevoTicket"
                type="button">
                  Nuevo ticket
                </button>
              </div>
              <div v-else class="row">
                <button
                  v-if="!showTickets"
                  class="btn btn-outline-primary"
                  @click="LoadTickets"
                  type="button"
                  >
                  Mostrar los {{ user.numeroTickets }} tickets
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Perfil_usuario',
  data () {
    return {
      showTickets: false,
      ticketEstatus: {
        id: ''
      }
    }
  },
  computed: {
    ...mapState('inicioSesion', ['user']),
    ...mapState('ticket', ['Tickets']),
    ...mapGetters('ticket', ['oneTicket']),
    ...mapState('ticket', {
      Respuestas: state => state.Respuestas
    })
  },
  methods: {
    ...mapActions('ticket', ['showComponentST']),
    ...mapActions('ticket', ['showComponentNT']),
    ...mapActions('ticket', ['fetchTickesByIdUser']),
    ...mapActions('ticket', ['fetchTicketId']),
    ...mapActions('ticket', ['fetchResTicketId']),
    ...mapActions('ticket', ['fetchAllTicketsSinAnalista']),
    ...mapActions('ticket', ['fetchAllTicketsAnalista']),
    async LoadTickets () {
      try {
        const id = parseInt(this.user.id)
        await this.fetchTickesByIdUser(id)
        this.showTickets = true
      } catch (error) {
        console.log('Error fetchTickesByIdUser')
      }
    },
    async BuscarTicket (id) {
      try {
        const response = await this.fetchTicketId(id)
        if (response.data.data.numeroRespuestas > 0) {
          await this.fetchResTicketId(id)
          console.log('Res::', this.Respuestas)
        }
        await this.showComponentST(true)
        await this.showComponentNT(false)
        this.$router.push('/tickets')
      } catch {
        console.log('Error')
      }
    },
    async NuevoTicket () {
      await this.showComponentNT(true)
      await this.showComponentST(false)
      this.$router.push('/tickets')
    },
    async TicketsSinAnalista () {
      try {
        await this.fetchAllTicketsSinAnalista()
        this.showTickets = true
      } catch (error) {
        console.log('Error fetchAllTicketsSinAnalista')
      }
    },
    async getTicketsAsignados () {
      try {
        const id = parseInt(this.user.id)
        await this.fetchAllTicketsAnalista(id)
        this.showTickets = true
      } catch (error) {
        console.log('Error fetchAllTicketsAnalista')
      }
    }
  }
}
</script>

<style>
.h3 {
  margin: 30px;
}
</style>
