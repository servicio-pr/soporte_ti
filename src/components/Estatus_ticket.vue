<template>
  <div class="container-fuid bs-body-bg">
    <div class="row">
      <div class="col">
        <div class="card text-bg-dark border dark-border-subtle rounded-4">
          <h2 class="card-title">Seguimiento de ticket</h2>
          <div class="card-header">
            <p>Ingrese el número de ticket para poder validar el estatus del mismo.</p>
            <p>También puede dar seguimiento ingresando su correo electrónico con el que realizo la solicitud.</p>
          </div>
          <div class="card-body">
            <form id="estatus"
            class="form"
            @submit.prevent="BuscarTicket"
                accion ="hhtps://vuejs.org/"
                method = "get"
                >
                  <div class="row">
                    <div v-if="showAlertTicketOk" class="alert alert-info" role="alert">
                      Ticket {{ Tickets.id }}, encontrado.
                    </div>
                    <div v-if="showAlertTicketNo" class="alert alert-danger" role="alert">
                      Ticket {{ Tickets.id }} no encontrado.
                    </div>
                    <div class="col">
                      <div class="row input-group-text text-bg-dark">
                      <label class="col form-label" for="ticket">Número de ticket </label>
                      <input
                        id="ticketId"
                        class="col form-control text-bg-dark"
                        v-model="ticketEstatus.id"
                        type="text"
                        name="id"
                        placeholder="#09675423"
                      >
                      <div class="col">
                        <span id="passwordHelpInline" class="form-text text-bg-dark">
                          Ingrese el número del ticket
                        </span>
                      </div>
                      </div>
                      <div class="row input-group-text text-bg-dark">
                        <label class="col form-label" for="email">Correo </label>
                        <input
                          id="email"
                          class="col form-control text-bg-dark"
                          v-model="ticketEstatus.email"
                          type="text"
                          name="email"
                          min="0"
                          placeholder="email@fundacionamparo.org.mx"
                        >
                        <div class="col">
                          <span id="passwordHelpInline" class="form-text text-bg-dark">
                            Ingrese su correo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="row text-end input-group-text text-bg-dark">
                      <button
                        class="col btn btn-outline-primary"
                        type="submit"
                        value="Buscar"
                        >
                        Buscar
                      </button>
                    </div>
                  </div>
                </form>
          </div>
        </div>
        <div class="card text-bg-dark border dark-border-subtle rounded-4">
          <h2 class="card-title">Ticket número {{ Tickets.id }}</h2>
          <div class="card-header">
          </div>
          <div class="card-body">
            <table  class="table-dark" id="info">
              <thead>
                  <tr>
                    <td>Título</td>
                    <td>Estatus</td>
                    <td>Usuario</td>
                    <td>Analista</td>
                    <td>Fecha de solicitud</td>
                    <td>Centro</td>
                    <td>Tema</td>
                    <td>Descripción</td>
                    <td>Fecha de la última respuesta</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td :key="Tickets.id"> {{ Tickets.titulo }} </td>
                    <td :key="Tickets.id" :value="Tickets.id_contacto"> {{ Tickets.id_contacto }} </td>
                    <td :key="Tickets.id" :value="Tickets.id"> {{ Tickets.id }} </td>
                    <td :key="Tickets.id" :value="Tickets.id_ubicacion"> {{ Tickets.id_ubicacion }} </td>
                    <td :key="Tickets.id" :value="Tickets.id_tema"> {{ Tickets.id_tema }} </td>
                    <td :key="Tickets.id" :value="Tickets.id_sdescripcion"> {{ Tickets.descripcion }} </td>
                    <td :key="Tickets.id" :value="Tickets.id"> {{ Tickets.id }} </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card text-bg-dark border dark-border-subtle rounded-4">
          <div class="card-header">
            <h3>Ticket {{ Tickets.id }}</h3>
          </div>
          <div class="card-body">
            <form id="resp"
            @submit.prevent="NuevaRespuesta"
            accion ="hhtps://vuejs.org/"
            method = "post"
            >
            <div class="row">
              <div class="col-sm-10">
                <div class="row input-group-text text-bg-dark">
                  <label class="col form-label" for="resp">Mensje:  </label>
                  <input
                    id="resp"
                    class="col form-control text-bg-dark"
                    v-model="respuesta.mensaje"
                    type="text"
                    name="resp"
                  >
                </div>
                <div class="row input-group-text text-bg-dark">
                <label class="col form-label " for="file">Evidencias:  </label>
                <input
                v-model="respuesta.evidencias"
                    type="text"
                    class="col form-control text-bg-dark"
                    id="fileInput"
                    @change="handleFileUpload"
                >
                </div>
                <div class="row input-group-text text-bg-dark">
              <label class="col form-label" for="centro">Cambiar estatus </label>
              <select
                  id="estatus"
                  class="input-group-text col text-bg-dark"
                  v-model="respuesta.estatus"
              >
                  <option>Proceso</option>
                  <option>Terminado</option>
                  <option>suspendido</option>
              </select>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="row input-group-text text-bg-dark">
                  <input
                  class="col-auto btn btn-outline-primary"
                    type="submit"
                    value="Enviar respuesta"
                  >
                    </div>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'Estatus_ticket',
  data () {
    return {
      ticketEstatus: {
        id: '',
        correo: ''
      },
      respuesta: {
        id_ticket: '',
        id_usuario: '',
        mensaje: '',
        evidencias: '',
        estatus: ''
      }
    }
  },
  computed: {
    ...mapGetters('ticket', ['Tickets']),
    ...mapState('inicioSesion', {
      user: state => state.user
    })
  },
  methods: {
    ...mapActions('ticket', ['fetchTicketId']),
    async BuscarTicket () {
      try {
        const response = await this.fetchTicketId(this.ticketEstatus.id)
        this.ticketEstatus = {
          id: '',
          email: ''
        }
        if (response.data.message === 'Exito') {
          this.showAlertTicketNo = false
          this.showAlertTicketOk = true
        } else {
          this.showAlertTicketNo = true
          this.showAlertTicketOk = false
        }
      } catch (error) {
        console.error('Errror al buscar ticket')
      }
    },
    ...mapActions('ticket', ['nuevaRespuesta']),
    async NuevaRespuesta () {
      try {
        this.respuesta = {
          id_ticket: this.ticketEstatus.id,
          id_usuario: this.user.id
        }
        await this.nuevaRespuesta(this.respuesta)
        this.respuesta = {
          id: '',
          mensaje: '',
          evidencias: '',
          estatus: ''
        }
      } catch (error) {
        console.error('Error al crear el ticket:', error)
      }
    }
  }
}
</script>

<style>
</style>
