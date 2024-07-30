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
                <tbody v-if="Tickets!=null">
                  <tr v-for="ticket in Tickets" :key="ticket.id">
                    <td>{{ ticket.title }}</td>
                  </tr>
                  <tr v-esle>
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
import { mapState, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('ticket', ['fetchTickesByUser']),
    async LoadTickets () {
      const userId = this.user.id
      console.log('uerId')
      await this.$store.dispatch('fetchTickesByUser', userId)
    }
  },
  computed: {
    ...mapState('inicioSesion', ['user']),
    ...mapState('ticket', ['Tickets'])
  }
}
</script>

<style>
</style>
