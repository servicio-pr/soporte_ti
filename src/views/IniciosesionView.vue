<template>
  <div class="Estatus_ticket">
    <h1>Iniciar sesión</h1>
    <Sesion/>
    <Analista/>
    <Direccion/>
    <Evidencias/>
  </div>
</template>

<script>
import Sesion from '@/components/Inicio_sesion.vue'
import Analista from '@/components/Kpi_analista.vue'
import Direccion from '@/components/Kpi_direccion.vue'
import Evidencias from '@/components/Evidencias_ticket.vue'

export default {
  name: 'IniciosesionView',
  components: {
    Sesion,
    Analista,
    Direccion,
    Evidencias
  }
}
</script>
