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
// import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'kpi_ticket',
  data () {
    return {
      Tarea: {
        nombre: ''
      }
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
</style>
