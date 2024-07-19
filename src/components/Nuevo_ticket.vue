<template>
    <div class="container-fuid bs-body-bg">
        <div class="row justify-content-md-center">
            <div class="col">
                <div class="card text-bg-dark border dark-border-subtle rounded-4">
                    <h2 class="card-title">Nuevo ticket</h2>
                    <div class="card-header">
                        <p>Por favor llene el siguiente formulario para poder comenzar a resolver su inconveniente. </p>
                    </div>
                    <div class="card-body">
                    <form id="ticket"
                    @submit.prevent="NuevoTicketForm"
                    accion ="hhtps://vuejs.org/"
                    method = "post"
                    >
                        <div class="row justify-content-center input-group-text text-bg-dark">
                            <label class="col form-label" for="nombre">Nombre </label>
                            <input
                            id="ticketNombre"
                            class="col form-control text-bg-dark"
                            v-model="Ticket.nombre"
                            type="text"
                            name="name"
                            placeholder="José Perez Leon"
                            required
                            >
                            <div class="col">
                                <span for="nomHelpInline" class="scrollable-text form-text text-bg-dark">
                                    Ingrese su nombre completo
                                </span>
                            </div>
                        </div>
                        <div class="row justify-content-center input-group-text text-bg-dark">
                            <label class="col form-label" for="email">Correo </label>
                            <input
                            id="email"
                            class="col form-control text-bg-dark"
                            v-model="Ticket.email"
                            type="text"
                            name="email"
                            min="0"
                            placeholder="email@fundacionamparo.org.mx"
                            required
                            >
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text text-bg-dark">
                                    Ingrese su correo laboral
                                </span>
                            </div>
                        </div>
                        <div class="row justify-content-center input-group-text text-bg-dark">
                            <label class="col form-label" for="telefono">Número telefónico </label>
                            <input
                            id="number"
                            class="col form-control text-bg-dark"
                            v-model="Ticket.telefono"
                            type="text"
                            name="number"
                            placeholder="+52 5566778899"
                            required
                            >
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text text-bg-dark">
                                    Número telefónico de contacto
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text text-bg-dark">
                            <label class="col form-label" for="centro">Centro </label>
                            <select
                                id="centros"
                                class="col form-select text-bg-dark"
                                v-model="Ticket.centroSelect"
                                required
                                for="centros"
                            >
                            <option v-for="centro in centros" :key="centro.id" :value="centro.nombre">
                                {{ centro.nombre }}
                            </option>
                            </select>
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text text-bg-dark">
                                    Lugar donde se presenta el problema
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text text-bg-dark">
                            <label class="col form-label" for="tema">Tema </label>
                            <select
                                id="temas"
                                class="col form-select text-bg-dark"
                                v-model="Ticket.temaSelect"
                                required
                                for="temas"
                            >
                            <option v-for="tema in temas" :key="tema.id" :value="tema.nombre">
                                {{ tema.nombre }}
                            </option>
                            </select>
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text text-bg-dark">
                                    Seleccione el tema a tratar
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text text-bg-dark">
                            <label class="col form-label" for="des">Descripción </label>
                            <div class="row">
                                <input
                                id="descripcion"
                                class="form-control text-bg-dark"
                                v-model="Ticket.descripcion"
                                type="text"
                                name="des"
                                min="1"
                                placeholder="Descripción detallada del problema"
                                required
                                >
                            </div>
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text text-bg-dark">
                                    Describa el problema lo más preciso y detalladamente posible.
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text text-bg-dark">
                            <label class="col form-label" for="file">Evidencias  </label>
                            <input
                                type="text"
                                class="col form-control text-bg-dark"
                                id="fileInput"
                                v-model="Ticket.evidencias"
                                >
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text text-bg-dark">
                                    Seleccione el archivo que nos pueda ayudar a visualizar el problema.
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text text-bg-dark">
                            <button
                            class="col btn btn-outline-primary"
                            type="submit"
                            value="Enviar"
                            >
                            Crear nuevo ticket
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Nuevo_ticket',
  data () {
    return {
      Ticket: {
        nombre: '',
        email: '',
        telefono: '',
        centroSelect: '',
        temaSelect: '',
        descripcion: '',
        evidencias: ''
      }
    }
  },
  computed: {
    ...mapGetters('tema', ['temas']),
    ...mapGetters('centro', ['centros'])
  },
  methods: {
    ...mapActions('tema', ['fetchTemas']),
    ...mapActions('centro', ['fetchCentros']),
    ...mapActions('ticket', ['nuevoTicket']),
    async NuevoTicketForm () {
      try {
        await this.nuevoTicket(this.Ticket)
        this.Ticket = {
          nombre: '',
          email: '',
          telefono: '',
          centroSelect: '',
          temaSelect: '',
          descripcion: '',
          evidencias: ''
        }
      } catch (error) {
        console.error('Error al crear el ticket:', error)
      }
    }
  },
  mounted () {
    try {
      this.fetchTemas()
      this.fetchCentros()
    } catch (error) {
      console.log('Error fetch temas y centro', error)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
