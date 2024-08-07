<template>
    <div class="container-fluid bs-body-bg">
      <div class="row">
        <div class="col">
          <div class="card text-bg-dark border dark-border-subtle rounded-4">
            <div class="title-card">
              <div class="list-group-item" v-for="(value, key) in user" :key="key">
                {{ key }}: {{ value }}
              </div>
            </div>
            <div class="card-body">
              <table class="table-dark">
                <thead>
                  <div class="row" v-if="user.numeroTickets === 0">
                    <button class="btn btn-outline-primary" @click="Nuevo_ticket" type="button">Nuevo ticket</button>
                  </div>
                  <div v-else>
                    <button class="btn btn-outline-primary" @click="LoadTickets" type="button">Mostrar los {{ user.numeroTickets }} tikets</button>
                    <tr v-if="showTickets">
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
                  </div>
                </thead>
                <tbody v-if="Tickets != null">
                  <tr v-for="(value, key) in Tickets" :key="key">
                    <td> {{ value }} </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td>Aún no hay tickets.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('inicioSesion', ['user']),
    ...mapState('ticket', ['Tickets'])
  },
  methods: {
    ...mapActions('ticket', ['fetchTickesByIdUser']),
    async LoadTickets () {
      try {
        const id = parseInt(this.user.id)
        const response = await this.fetchTickesByIdUser(id)
        console.log('Response fetchTickesByIdUser::: ', response.data.message)
      } catch (error) {
        console.log('Error fetchTickesByIdUser')
      }
    }
  }
}
</script>

<style>
</style>
