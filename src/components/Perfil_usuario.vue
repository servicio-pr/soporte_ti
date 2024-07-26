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
                  Tickets:
                </thead>
                <tbody v-if="Tickets">
                  <tr v-for="ticket in Tickets" :key="ticket.id">
                    <td>{{ ticket.title }}</td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td>Aun no hay tickets.</td>
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
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('ticket', ['fetchTickets'])
  },
  computed: {
    ...mapGetters('ticket', ['Tickets']),
    ...mapState('inicioSesion', ['user'])
  },
  mounted () {
    try {
      this.fetchTickets()
    } catch (error) {
      console.log('Error fetch user y tickets', error)
    }
  }
}
</script>

<style>
</style>
