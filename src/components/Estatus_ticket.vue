<template>
  <div class="container-fuid bs-body-bg" v-if="showEstatusTicket">
    <div class="row">
      <div class="col">
        <div v-if="showAlertTicketOk" class="alert alert-info" role="alert">
          Ticket {{ oneTicket.id }}, encontrado.
        </div>
        <div v-if="showAlertTicketNo" class="alert alert-danger" role="alert">
          Ticket {{ oneTicket.id }} no encontrado.
        </div>
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
          <h2 class="card-title">Ticket número {{ oneTicket.id }}</h2>
          <div class="card-header">
          </div>
          <div class="card-body">

            <div class="row">
              <div class="col">
                <ul class="list-group text-bg-dark">
                  <li class="list-group-item text-bg-dark">
                    <span class="label">Titulo: </span>
                    <span class="value" :key="oneTicket.id">{{ oneTicket.titulo }}</span>
                  </li>
                  <li class="list-group-item text-bg-dark">
                    <span class="label">Estatus: </span>
                    <span class="value">{{ oneTicket.estatus }}</span>
                  </li>
                  <li class="list-group-item text-bg-dark">
                    <span class="label">Usuario: </span>
                    <span class="value">{{ oneTicket.id_contacto }}</span>
                  </li>
                  <li class="list-group-item text-bg-dark">
                    <span class="label">Centro: </span>
                    <span class="value">{{ oneTicket.id_ubicacion }}</span>
                  </li>
                  <li class="list-group-item text-bg-dark">
                    <span class="label">Tema: </span>
                    <span class="value">{{ oneTicket.id_tema }}</span>
                  </li>
                </ul>
              </div>
              <div class="col">
                <ul class="list-group text-bg-dark">
                  <li class="list-group-item text-bg-dark">
                    <span class="label">Analista: </span>
                    <span v-if="oneTicket.id_analista === null && user.permiso === 3">
                      <button
                      type="button"
                      class="btn btn-outline-success"
                      @click="asignarTicket"
                      >
                        Asignar ticket
                      </button>
                    </span>
                    <span v-if="oneTicket.id_analista === null">
                      Sin asignar
                    </span>
                    <span>
                      {{ oneTicket.id_analista }}
                    </span>
                  </li>
                  <li class="list-group-item text-bg-dark">
                    <span class="label">Fecha de solicitud:</span>
                    <span class="value">{{ oneTicket.creado_fecha }}</span>
                  </li>
                  <li class="list-group-item text-bg-dark">
                    <span class="label">Descripción: </span>
                    <span class="value">{{ oneTicket.descripcion }} </span>
                  </li>
                  <li class="list-group-item text-bg-dark">
                    <span class="label">Fecha de la última respuesta:</span>
                    <span class="value">{{ oneTicket.fecha_respuesta }} </span>
                  </li>
                  <li class="list-group-item text-bg-dark">
                    <span class="label">Numero de respuestas:</span>
                    <span class="value">{{ oneTicket.numeroRespuestas }} </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <button col
              type="button"
              class="btn btn-outline-success"
              @click="showEvidencia"
              >
                Mostrar evidencias
              </button>
            </div>
          </div>
        </div>
        <div
        id="respuestas"
        class="card text-bg-dark border dark-border-subtle rounded-4"
        v-if="oneTicket.numeroRespuestas > 0"
        >
          <h4 class="card-title">Respuestas del ticket número {{ oneTicket.id }}</h4>
          <div class="card-header">
          </div>
          <div class="card-body">
            <table  class="table-dark table-striped" id="info">
              <thead>
                  <tr>
                    <th scope="col">Número de respuesta</th>
                    <th scope="col">Mensaje</th>
                    <th scope="col">fecha</th>
                    <th scope="col">Usuario</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="res in Respuestas" :key="res.id">
                    <td > {{ res.id }} </td>
                    <td > {{ res.mensaje }} </td>
                    <td > {{ res.fecha }} </td>
                    <td > {{ res.id_usuario }} </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="NewRespuesta" class="card text-bg-dark border dark-border-subtle rounded-4">
          <div class="card-header">
            <h3>Ticket {{ oneTicket.id }}</h3>
          </div>
          <div class="card-body">
            <form id="resp"
            @submit.prevent="NuevaRespuesta"
            accion ="hhtps://vuejs.org/"
            method = "post"
            enctype="multipart/form-data"
            >
            <div class="row">
              <div class="col-sm-10">
                <div class="row input-group-text text-bg-dark">
                  <label class="col form-label" for="resp">Mensaje:  </label>
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
                    type="file"
                    class="col form-control text-bg-dark"
                    id="fileInput"
                    @change="handleFileUpload"
                    name="evidencia"
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
                  <button
                  class="col-auto btn btn-outline-primary"
                    type="submit"
                    value="Enviar respuesta"
                  >
                  Enviar respuesta
                  </button>
                </div>
              </div>
            </div>
          </form>
          </div>
        </div>
        <div class="card">
          <button
          class="btn btn-outline-primary"
          @click="NewRespuesta = true"
          v-if="!NewRespuesta"
          >
            Agregar Respuesta
          </button>
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
        evidencia: null,
        estatus: ''
      },
      NewRespuesta: false
    }
  },
  computed: {
    ...mapGetters('ticket', ['oneTicket']),
    ...mapState('inicioSesion', {
      user: state => state.user
    }),
    ...mapState('ticket', {
      showEstatusTicket: state => state.showEstatusTicket
    }),
    ...mapState('ticket', {
      Respuestas: state => state.Respuestas
    }),
    ...mapState('ticket', {
      showAlertTicketNo: state => state.showAlertTicketNo
    }),
    ...mapState('ticket', {
      showAlertTicketOk: state => state.showAlertTicketOk
    })
  },
  methods: {
    ...mapActions('ticket', ['fetchResTicketId']),
    ...mapActions('ticket', ['fetchTicketId']),
    ...mapActions('ticket', ['AshowAlertTicketNo']),
    ...mapActions('ticket', ['AshowAlertTicketOk']),
    ...mapActions('ticket', ['AsignarTicket']),
    ...mapActions('ticket', ['evidenciaTicket']),
    async BuscarTicket () {
      try {
        const response = await this.fetchTicketId(this.ticketEstatus.id)
        this.ticketEstatus = {
          id: '',
          email: ''
        }
        if (response.data.data.numeroRespuestas > 0) {
          await this.fetchResTicketId(this.oneTicket.id)
        }
        if (response.data.message === 'Exito') {
          this.AshowAlertTicketNo(false)
          this.AshowAlertTicketOk(true)
        } else {
          this.AshowAlertTicketNo(true)
          this.AshowAlertTicketOk(false)
        }
      } catch (error) {
        console.error('Errror al buscar ticket')
      }
    },
    handleFileUpload (event) {
      this.evidencia = event.target.files[0]
    },
    ClearFile () {
      this.evidencia = null
    },
    ...mapActions('ticket', ['nuevaRespuesta']),
    async NuevaRespuesta () {
      try {
        const nuevaRespuesta = new FormData()
        nuevaRespuesta.append('id_usuario', this.user.id)
        nuevaRespuesta.append('id_ticket', this.oneTicket.id)
        nuevaRespuesta.append('mensaje', this.respuesta.mensaje)
        nuevaRespuesta.append('evidencia', this.evidencia)
        nuevaRespuesta.append('estatus', this.respuesta.estatus)
        console.log('NewRespuesta', nuevaRespuesta)
        await this.nuevaRespuesta(nuevaRespuesta)
        this.respuesta = {
          id: '',
          mensaje: '',
          evidencias: '',
          estatus: ''
        }
        this.NewRespuesta = false
        this.ClearFile()
      } catch (error) {
        console.error('Error al insertar respuesta:', error)
      }
    },
    async asignarTicket () {
      try {
        const asignar = {
          idTicket: this.oneTicket.id,
          idUser: this.user.id
        }
        const response = await this.AsignarTicket(asignar)
        if (response) {
          console.log('Todo bien')
        }
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    async showEvidencia () {
      try {
        const evidenciaTicket = await this.evidenciaTicket(this.oneTicket.id)
        if (evidenciaTicket) {
          console.log('Evidencias: --', evidenciaTicket)
        } else {
          console.log('Error: --', evidenciaTicket)
        }
      } catch (error) {
        console.log()
      }
    }
  }
}
</script>

<style>
</style>
