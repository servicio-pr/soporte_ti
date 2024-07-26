<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <Nuevoticket  v-if="isAuthenticated"/>
      </div>
      <div class="col">
            <Estatusticket v-if="isAuthenticated"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
          <Iniciosesion v-if="!isAuthenticated" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nuevoticket from '@/components/Nuevo_ticket.vue'
import Estatusticket from '@/components/Estatus_ticket.vue'
import Iniciosesion from '@/components/Inicio_sesion.vue'
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    Estatusticket,
    Nuevoticket,
    Iniciosesion
  },
  computed: {
    ...mapState('inicioSesion', {
      isAuthenticated: state => state.isAuthenticated
    })
  }
}
</script>
