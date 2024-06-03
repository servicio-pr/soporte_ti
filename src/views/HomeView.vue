<template>
  <div class="home">
    <div class="tickets">
      <div class="nuevo_tickets">
        <Nuevoticket/>
      </div>
      <div class="estatus_tickets">
        <Estatusticket/>
      </div>
    </div>
    <div class="sesion">
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
