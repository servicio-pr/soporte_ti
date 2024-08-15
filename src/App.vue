<template>
  <nav id="navbar" class="navbar nav-fill navbar-expand-lg bg-dark border dark-border-subtle rounded-5">
    <div class="container-fluid justify-content-center">
      <div class="row w-100">

        <div class="col-2">
          <router-link to="/tickets" class="nav-link text-bg-dark" :class="{ disabled: !isAuthenticated }">
            <button
              class="btn btn-outline-primary"
              type="submit"
              @click="NuevoTicket"
              >
              Nuevo Ticket
            </button>
          </router-link>
        </div>

        <div class="col-6">
          <form
          class="form d-flex"
          @submit.prevent="BuscarTicket"
          accion ="hhtps://vuejs.org/"
          method = "get"
          role="search"
          :class="{ disabled: !isAuthenticated }"
          >
            <input
            class="form-control s-nv text-bg-dark"
            type="search"
            placeholder="Número de ticket"
            aria-label="Search"
            pattern="\d*"
            v-model="ticketEstatus.id"
            required>
            <button class="btn btn-outline-primary" type="submit">Buscar ticket</button>
          </form>
        </div>

        <div class="col-2 text-center">
          <div v-if="isAuthenticated">
            <router-link class="nav-link text-white" to="/sesion">Bienvenido, {{ user.nombre }}</router-link>
          </div>
          <div v-else>
            <router-link to="/sesion" class="nav-link text-white">Inicio de sesión</router-link>
          </div>
        </div>

        <div class="col-2 text-center">
          <div v-if="isAuthenticated">
            <a @click="handleCerrarSesion" class="nav-link text-white">Cerrar sesión</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="container-fuid justify-content-center">
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'nav_bar',
  data () {
    return {
      ticketEstatus: {
        id: ''
      }
    }
  },
  computed: {
    ...mapGetters('ticket', ['Tickets']),
    ...mapState('inicioSesion', {
      user: state => state.user,
      isAuthenticated: state => state.isAuthenticated
    })
  },
  methods: {
    ...mapActions('inicioSesion', ['cerrarSesion']),
    async handleCerrarSesion () {
      await this.cerrarSesion()
      this.$router.push('/sesion')
    },
    ...mapActions('ticket', ['fetchTicketId']),
    ...mapActions('ticket', ['showComponentST']),
    ...mapActions('ticket', ['showComponentNT']),
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
        await this.showComponentST(true)
        await this.showComponentNT(false)
        this.$router.push('/tickets')
      } catch (e) {
        console.error('Errror al buscar ticket')
      }
    },
    async NuevoTicket () {
      await this.showComponentNT(true)
      await this.showComponentST(false)
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  font: 1rem/1.5 var(--bs-font-sans-serif);
  background-color: black;
}
::placeholder {
  color:white;
 }
.container {
  display: flex;
  flex-direction: column;
}
.row {
  margin: 2px;
  padding: 2px;
}
#navbar {
  margin: 2px;
}
.max-width-row {
  max-width: 70%; /* Tamaño máximo del div de inicio de sesion */
}
.disabled {
  pointer-events: none;
  color: grey;
}
</style>
