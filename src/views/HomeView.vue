<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card -sm-6 mb-3 mb-sm-0">
          <div class="card-body">
            <Nuevoticket/>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-3">
          <div class="card-body">
            <Estatusticket/>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="card w-80">
          <div class="card-body">
            <Iniciosesion/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nuevoticket from '@/components/Nuevo_ticket.vue'
import Estatusticket from '@/components/Estatus_ticket.vue'
import Iniciosesion from '@/components/Inicio_sesion.vue'

export default {
  name: 'HomeView',
  components: {
    Estatusticket,
    Nuevoticket,
    Iniciosesion
  }
}
</script>
