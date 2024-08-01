<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <Sesion v-if="!isAuthenticated"/>
        <Perfil v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import Sesion from '@/components/Inicio_sesion.vue'
import Perfil from '@/components/Perfil_usuario.vue'
import { mapState } from 'vuex'

export default {
  name: 'IniciosesionView',
  components: {
    Sesion,
    Perfil
  },
  computed: {
    ...mapState('inicioSesion', {
      user: state => state.user,
      isAuthenticated: state => state.isAuthenticated
    })
  }
}
</script>
