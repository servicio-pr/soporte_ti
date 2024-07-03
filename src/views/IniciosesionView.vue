<template>
  <div class="container-md bs-body-bg">
    <h1 class="h2">Iniciar sesión</h1>
    <div class="row">
      <div class="col">
        <div class="card mb-3">
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
