<template>
  <div class="container-fluid bs-body-bg">
    <div class="row">
      <div class="col">
        <div class="card text-center text-bg-dark border dark-border-subtle rounded-4">
          <h3>Tareas de los analistas</h3>
          <div class="card-body row">
            <table  class="table-dark">
              <thead>
                <tr>
                  <td>Analista</td>
                  <td>Mes</td>
                  <td>Fecha de inicio</td>
                  <td>Tiempo invertido</td>
                  <td>Tiempo máximo</td>
                  <td>Area TI</td>
                  <td>Rama</td>
                  <td>Lugar</td>
                  <td>Descripción</td>
                  <td>Evidencias</td>
                </tr>
              </thead>
              <tbody>
                <tr>

                    <td>
                      <button type="button" class="btn btn-outline-info"> +
                        Nueva tarea
                      </button>
                    </td>
                    <td>
                      <label for="" class=""></label>
                    </td>
                    <td>
                      <label for="" class=""></label>
                    </td>
                    <td>
                      <label for="" class=""></label>
                    </td>
                    <td>

                    </td>
                    <td>
                      <select class="col form-select text-bg-dark" aria-label="">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </td>
                    <td>
                      <select class="col form-select text-bg-dark" aria-label="">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </td>
                    <td>
                      <select class="col form-select text-bg-dark" aria-label="">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </td>
                    <td>
                      <input
                      type="text"
                      class="form-select text-bg-dark"
                      id=""
                      placeholder="Describa el problemas"
                      >
                    </td>
                    <td>
                      <button type="button" class="btn btn-outline-info">
                        Evidencias: {{ Tarea.evidencias }}
                      </button>
                    </td>
                  </tr>
              </tbody>
              </table>
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
      Tarea: {
        nombre: ''
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
      console.log('ok fetch Temas y centro', this.temas)
    } catch (error) {
      console.log('Error fetch temas y centro', error)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
