<template>
  <nav id="navbar" class="navbar nav-fill navbar-expand-lg bg-dark border dark-border-subtle rounded-5">
    <div class="container-fluid justify-content-center">
      <div class="row w-100">
        <!-- Tickets Link -->
        <div class="col-2">
          <router-link to="/tickets" class="nav-link text-bg-dark" :class="{ disabled: !isAuthenticated }">
            Tickets
          </router-link>
        </div>

        <!-- Search Form -->
        <div class="col-6">
          <form class="d-flex" role="search" :class="{ disabled: !isAuthenticated }">
            <input class="form-control s-nv text-bg-dark" type="search" placeholder="Número de ticket" aria-label="Search" pattern="\d{8,8}" required>
            <button class="btn btn-outline-primary" type="submit">Buscar ticket</button>
          </form>
        </div>

        <!-- User Greeting or Login Link -->
        <div class="col-2 text-center">
          <div v-if="isAuthenticated">
            <router-link class="nav-link text-white" to="/sesion">Bienvenido, {{ user.nombre }}</router-link>
          </div>
          <div v-else>
            <router-link to="/sesion" class="nav-link text-white">Inicio de sesión</router-link>
          </div>
        </div>

        <!-- Logout Link -->
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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'nav_bar',
  data () {
    return {
      Ticket: {
        id: null
      }
    }
  },
  methods: {
    ...mapActions('inicioSesion', ['cerrarSesion']),
    async handleCerrarSesion () {
      await this.cerrarSesion()
      this.$router.push('/sesion')
    }
  },
  computed: {
    ...mapState('inicioSesion', {
      user: state => state.user,
      isAuthenticated: state => state.isAuthenticated
    })
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
