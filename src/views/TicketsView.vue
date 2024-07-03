<template>
  <div class="container-md bs-body-bg">
    <div class="row">
      <div class="col">
        <div class="card mb-3">
          <h2>Tickets</h2>
          <Nuevoticket/>
          <Estatusticket/>
          <Infoticket/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nuevoticket from '@/components/Nuevo_ticket.vue'
import Estatusticket from '@/components/Estatus_ticket.vue'
import Infoticket from '@/components/Info_ticket.vue'

export default {
  name: 'TicketsView',
  components: {
    Estatusticket,
    Nuevoticket,
    Infoticket
  }
}
</script>
