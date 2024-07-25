<template>
  <nav id="navbar" class="navbar nav-fill navbar-expand-lg bg-dark border dark-border-subtle rounded-5">
    <div class="container-fluid justify-content-center">
      <div class="row">
        <div class="col-2">
          <a class="nav-link" href="#">
            <router-link to="/">Inicio</router-link>
          </a>
        </div>
        <div class="col-2">
          <a class="nav-link" href="#">
            <router-link to="/tickets">Tickets</router-link>
          </a>
        </div>
        <div class="col-6">
          <a class="">
            <form class="d-flex" role="search">
              <input class="form-control s-nv text-bg-dark" type="search" placeholder="Número de ticket" aria-label="Search" pattern="\d{8,8}" required>
              <button class="btn btn-outline-primary" type="submit">Buscar ticket</button>
            </form>
          </a>
        </div>
        <div class="col-2">
          <a class="nav-link d-flex text-bg-dark" href="#">
            <div v-if="user">
              Bienvenido, {{ user.nombre }}.
              <button class="btn btn-outline-primary b-nv" @click="cerrarSesion">Cerrar sesión</button>
            </div>
            <div v-else>
              <router-link to="/sesion">Inicio de sesión</router-link>
            </div>
        </a>
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
  methods: {
    ...mapActions('inicioSesion', ['cerrarSesion'])
  },
  computed: {
    ...mapState('inicioSesion', {
      user: state => state.user
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
</style>
