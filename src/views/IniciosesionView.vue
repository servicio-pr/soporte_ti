<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="">
            <Sesion/>
        </div>
        <div class="">
            <Analista/>
        </div>
        <div class="">
            <Direccion/>
        </div>
        <div class="">
            <Evidencias/>
        </div>
      </div>
    </div>
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
