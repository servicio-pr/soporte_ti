<template>
  <div class="container-fluid bs-body-bg">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="card text-bg-dark border dark-border-subtle rounded-4">
              <h3>Información del ticket número: </h3>
              <div class="card-body">
                <table  class="table-dark" id="info">
                  <thead>
                      <tr>
                        <td>Número ticket</td>
                        <td>Estatus</td>
                        <td>Usuario</td>
                        <td>Analista</td>
                        <td>Fecha de solicitud</td>
                        <td>Centro</td>
                        <td>Fecha de inicio</td>
                        <td>Tiempo invertido</td>
                        <td>Descripción</td>
                        <td>Fecha de la última respuesta</td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card text-bg-dark border dark-border-subtle rounded-4">
              <div class="card-body">
                <table  class="table-dark">
                  <thead>
                      <tr>
                        <td>Usuario</td>
                        <td>Tipo usuario</td>
                        <td>Fecha de respuesta</td>
                        <td>Respuesta</td>
                        <td>Evidencias</td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card text-bg-dark border dark-border-subtle rounded-4">
              <div class="card-body">
                <form id="resp"
                  @submit="checkForm"
                  accion ="hhtps://vuejs.org/"
                  method = "post"
                  >
                  <div class="row">
                    <div class="col-sm-10">
                      <div class="row input-group-text text-bg-dark">
                        <label class="col form-label" for="resp">Respuesta:  </label>
                        <input
                          id="resp"
                          class="col form-control text-bg-dark"
                          v-model="resp"
                          type="text"
                          name="resp"
                        >
                      </div>
                      <div class="row input-group-text text-bg-dark">
                      <label class="col form-label " for="file">Evidencias:  </label>
                      <input
                          type="file"
                          class="col form-control text-bg-dark"
                          id="fileInput"
                          @change="handleFileUpload"
                      >
                      </div>
                      <div class="row input-group-text text-bg-dark">
                    <label class="col form-label" for="centro">Cambiar estatus </label>
                    <select
                        id="estatus"
                        class="input-group-text col text-bg-dark"
                    >
                        <option>Proceso</option>
                        <option>Terminado</option>
                    </select>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="row input-group-text text-bg-dark">
                        <input
                        class="col-auto btn btn-outline-primary"
                          type="submit"
                          value="Enviar respuesta"
                        >
                          </div>
                    </div>
                  </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
