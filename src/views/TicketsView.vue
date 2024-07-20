<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2>Tickets</h2>
        <Nuevoticket/>
        <Estatusticket/>
      </div>
    </div>
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
