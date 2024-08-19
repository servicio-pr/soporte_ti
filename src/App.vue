<template>
  <nav id="navbar" class="navbar nav-fill navbar-expand-lg">
    <div class="container-fluid justify-content-center">
      <div class="row">

        <div class="col-2">
          <a :href="url_PR">
            <img :src="logo_PR" alt="Logo Proyecto Roberto" />
          </a>
        </div>

        <div class="col-2">
          <router-link to="/tickets" class="nav-link" :class="{ disabled: !isAuthenticated }">
            <button
              class="btn btn-outline-primary"
              type="submit"
              @click="NuevoTicket"
              >
              Nuevo Ticket
            </button>
          </router-link>
        </div>

        <div class="col-3">
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

        <div class="col-1">
          <div v-if="isAuthenticated">
            <router-link class="nav-link text-white" to="/sesion">Bienvenido, {{ user.nombre }}</router-link>
          </div>
          <div v-else>
            <router-link to="/sesion" class="nav-link text-white">Inicio de sesión</router-link>
          </div>
        </div>

        <div class="col-1">
          <div v-if="isAuthenticated">
            <a @click="handleCerrarSesion" class="nav-link text-white">Cerrar sesión</a>
          </div>
        </div>

        <div class="col-1">
          <a :href="url_PR">
            <img :src="logo_FA" alt="Logo Fundación Amparo" />
          </a>
        </div>

      </div>
    </div>
  </nav>
  <div class="container-fuid justify-content-center">
    <router-view/>
  </div>
  <div class="separator"></div>
  <div>
    <Footer/>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Footer from '@/components/Pie_pagina.vue'

export default {
  name: 'nav_bar',
  data () {
    return {
      ticketEstatus: {
        id: ''
      },
      logo_PR: require('@/assets/logo.png'),
      logo_FA: require('@/assets/logo_FA.png')
    }
  },
  components: {
    Footer
  },
  computed: {
    ...mapGetters('ticket', ['oneTicket']),
    ...mapState('inicioSesion', {
      user: state => state.user,
      isAuthenticated: state => state.isAuthenticated
    }),
    ...mapState('ticket', {
      showAlertTicketNo: state => state.showAlertTicketNo
    }),
    ...mapState('ticket', {
      showAlertTicketOk: state => state.showAlertTicketOk
    }),
    ...mapState('ticket', {
      Respuestas: state => state.Respuestas
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
    ...mapActions('ticket', ['AshowAlertTicketNo']),
    ...mapActions('ticket', ['AshowAlertTicketOk']),
    ...mapActions('ticket', ['fetchResTicketId']),
    async BuscarTicket () {
      try {
        const response = await this.fetchTicketId(this.ticketEstatus.id)
        if (response.data.data.numeroRespuestas > 0) {
          await this.fetchResTicketId(this.oneTicket.id)
        }
        this.ticketEstatus = {
          id: '',
          email: ''
        }
        if (response.data.message === 'Exito') {
          this.AshowAlertTicketNo(false)
          this.AshowAlertTicketOk(true)
        } else {
          this.AshowAlertTicketNo(true)
          this.AshowAlertTicketOk(false)
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
body {
  background-color: #1a1a1a;
  color: #ffffff;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
  font: 1rem/1.5 var(--bs-font-sans-serif);
  background-color: black;
}
::placeholder {
  color:white;
 }
 .card {
  background-color: black;
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
  max-width: 70%;
}
.disabled {
  pointer-events: none;
  color: grey;
}
a:link {
  color: white;
}
a:visited {
  color: white;
}
a:hover {
  color: blue;
}
a:active {
  color: green;
}
a {
  text-decoration: none;
}
.separator {
  height: 2px; /* Ajusta el grosor según tus necesidades */
  background-color: white; /* Ajusta el color según tus necesidades */
  margin: 20px 0; /* Ajusta el margen según tus necesidades */
}
</style>
