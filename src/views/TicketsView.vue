<template>
  <div class="about">
    <h1>Tickets</h1>
    <Nuevoticket/>
    <Estatusticket/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nuevoticket from '@/components/Nuevo_ticket.vue'
import Estatusticket from '@/components/Estatus_ticket.vue'

export default {
  name: 'TicketsView',
  components: {
    Estatusticket,
    Nuevoticket
  }
}
</script>
