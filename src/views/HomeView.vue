<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <Nuevoticket/>
      </div>
      <div class="col">
            <Estatusticket/>
      </div>
    </div>
    <div class="row">
      <div class="col">
            <Iniciosesion/>
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
