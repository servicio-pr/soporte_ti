<template>
  <div class="container text-center" >
    <div class="row">
      <div class="col">
        <Nuevoticket/>
      </div>
      <div class="col">
        <Estatusticket/>
      </div>
    </div>
    <div class="row">
      <Iniciosesion/>
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
