<template>
  <div class="Estatus_ticket">
    <h1>Iniciar sesión</h1>
    <Sesion/>
  </div>
</template>

<script>
import Sesion from '@/components/Inicio_sesion.vue'

export default {
  name: 'IniciosesionView',
  components: {
    Sesion
  }
}
</script>
