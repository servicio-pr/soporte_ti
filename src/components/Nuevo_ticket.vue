<template>
    <div class="container-fuid bs-body-bg"  v-if="showNuevoTicket">
        <div class="row justify-content-md-center">
            <div class="col">
                <div class="card text-bg-dark border dark-border-subtle rounded-4">
                    <h2 class="card-title">Nuevo ticket</h2>
                    <div class="card-header">
                        <p>Por favor llene el siguiente formulario para poder comenzar a resolver su inconveniente. </p>
                    </div>
                    <div v-if="showAlertTicketOk" class="alert alert-primary" role="alert">
                        Ticket creado exitosamente, número: {{ this.Response.id }}
                    </div>
                    <div v-if="showAlertPass" class="alert alert-danger" role="alert">
                      Error al crear el ticket.
                    </div>
                    <div class="card-body">
                    <form id="ticket"
                    @submit.prevent="NuevoTicketForm"
                    accion ="hhtps://vuejs.org/"
                    method = "post"
                    enctype="multipart/form-data"
                    >
                        <div class="row justify-content-center input-group-text text-bg-dark">
                            <label class="col form-label" for="nombre">Nombre </label>
                            <input
                            id="nombre"
                            class="col form-control text-bg-dark"
                            v-model="User.nombre"
                            type="text"
                            name="nombre"
                            placeholder="José Perez Leon"
                            required
                            >
                            <div class="col">
                                <span for="nombre" class="scrollable-text form-text text-bg-dark">
                                    Ingrese su nombre completo
                                </span>
                            </div>
                        </div>
                        <div class="row justify-content-center input-group-text text-bg-dark">
                            <label class="col form-label" for="email">Correo </label>
                            <input
                            id="email"
                            class="col form-control text-bg-dark"
                            v-model="User.correo"
                            type="text"
                            name="email"
                            min="0"
                            placeholder="email@fundacionamparo.org.mx"
                            required
                            >
                            <div class="col">
                                <span for="email" id="emailHelpInline" class="form-text text-bg-dark">
                                    Ingrese su correo laboral
                                </span>
                            </div>
                        </div>
                        <div class="row justify-content-center input-group-text text-bg-dark">
                            <label class="col form-label" for="telefono">Número telefónico </label>
                            <input
                            id="number"
                            class="col form-control text-bg-dark"
                            v-model="User.telefono"
                            type="text"
                            name="number"
                            placeholder="+52 5566778899"
                            required
                            >
                            <div class="col">
                                <span for="number" class="form-text text-bg-dark">
                                    Ext.
                                </span>
                            </div>
                            <input
                            id="ext"
                            class="col form-control text-bg-dark"
                            v-model="User.EXT"
                            type="text"
                            name="number"
                            placeholder="123"
                            required
                            >
                            <div class="col">
                                <span for="ext" id="extHelpInline" class="form-text text-bg-dark">
                                    Número telefónico de contacto
                                </span>
                            </div>
                        </div>
                        <div class="row justify-content-center input-group-text text-bg-dark">
                          <label class="col form-label" for="titulo">Titulo </label>
                          <input
                          id="titulo"
                          class="col form-control text-bg-dark"
                          v-model="Ticket.titulo"
                          type="text"
                          name="titulo"
                          placeholder="Titulo"
                          required
                          >
                          <div class="col">
                              <span for="titulo" class="scrollable-text form-text text-bg-dark">
                                  Titulo del problema
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
                            <option v-for="centro in centros" :key="centro.id" :value="centro.id">
                                {{ centro.nombre }}
                            </option>
                            </select>
                            <div class="col">
                                <span for="centros" id="centrosHelpInline" class="form-text text-bg-dark">
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
                            <option v-for="tema in temas" :key="tema.id" :value="tema.id">
                                {{ tema.nombre }}
                            </option>
                            </select>
                            <div class="col">
                                <span for="temas" id="temaHelpInline" class="form-text text-bg-dark">
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
                                <span for="descripcion" class="form-text text-bg-dark">
                                    Describa el problema lo más preciso y detalladamente posible.
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text text-bg-dark">
                            <label class="col form-label" for="file">Evidencias  </label>
                            <input
                                type="file"
                                class="col form-control text-bg-dark"
                                id="fileInput"
                                @change="handleFileUpload"
                                name="evidencia"
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
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'Nuevo_ticket',
  data () {
    return {
      Ticket: {
        email: '',
        telefono: '',
        ext: '',
        titulo: '',
        centroSelect: '',
        temaSelect: '',
        descripcion: '',
        evidencia: null
      },
      User: {
        nombre: '',
        correo: '',
        pass: '',
        SelectUserContacto: 'usuario'
      },
      Response: {
        id: ''
      }
    }
  },
  computed: {
    ...mapGetters('tema', ['temas']),
    ...mapGetters('centro', ['centros']),
    ...mapState('inicioSesion', {
      user: state => state.user,
      isAuthenticated: state => state.isAuthenticated
    }),
    ...mapState('ticket', {
      showNuevoTicket: state => state.showNuevoTicket
    }),
    labelClass () {
      return this.User.SelectUserType === 'usuario' ? 'text-success' : 'text-info'
    },
    labelText () {
      return this.User.SelectUserType === 'usuario'
        ? 'Iniciar sesión como usuario.'
        : 'Iniciar sesión como invitado.'
    }
  },
  methods: {
    ...mapActions('tema', ['fetchTemas']),
    ...mapActions('centro', ['fetchCentros']),
    ...mapActions('ticket', ['nuevoTicket']),
    async NuevoTicketForm () {
      try {
        const Ticket = new FormData()
        Ticket.append('idUser', this.user.id)
        Ticket.append('titulo', this.Ticket.titulo)
        Ticket.append('centroSelect', this.Ticket.centroSelect)
        Ticket.append('temaSelect', this.Ticket.temaSelect)
        Ticket.append('descripcion', this.Ticket.descripcion)
        Ticket.append('estatus', 'abierto')
        Ticket.append('evidencia', this.evidencia)
        console.log('Ticket antes', Ticket)
        const response = await this.nuevoTicket(Ticket)
        this.Response.id = response
        this.Ticket = {
          centroSelect: '',
          temaSelect: '',
          descripcion: ''
        }
        this.showAlertTicketBad = false
        this.showAlertTicketOk = true
        this.ClearFile()
      } catch (error) {
        this.showAlertTicketBad = true
        this.showAlertTicketOk = false
      }
    },
    precargaDatosUser () {
      if (this.user) {
        this.User.nombre = this.user.nombre
        this.User.correo = this.user.correo
      }
    },
    handleFileUpload (event) {
      this.evidencia = event.target.files[0]
    },
    ClearFile () {
      this.evidencia = null
    }
  },
  mounted () {
    try {
      this.fetchTemas()
      this.fetchCentros()
      this.precargaDatosUser()
      this.$forceUpdate()
    } catch (error) {
      console.log('Error fetch temas y centro', error)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
