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
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Estatus_ticket',
  data () {
    return {
      ticketEstatus: {
        id: '',
        correo: ''
      }
    }
  },
  computed: {
    ...mapGetters('ticket', ['Tickets'])
  },
  methods: {
    ...mapActions('ticket', ['fetchTicketId']),
    async BuscarTicket () {
      try {
        await this.fetchTicketId(this.ticketEstatus.id)
        this.ticketEstatus = {
          id: '',
          email: ''
        }
      } catch (error) {
        console.error('Errror al buscra ticket')
      }
    }
  }
}
</script>

<style>
</style>
