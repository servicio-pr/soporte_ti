<template>
  <div class="container-md bs-body-bg">
    <div class="row">
      <div class="col">
        <div class="card mb-3">
          <div class="card-body">
            <h3>Seguimiento de ticket</h3>
            <p>Ingrese el número de ticket para poder validar el estatus del mismo.</p>
            <p>También puede dar seguimiento ingresando su correo electrónico con el que realizo la solicitud.</p>
            <form id="estatus"
            class="form"
                @submit="checkForm"
                accion ="hhtps://vuejs.org/"
                method = "post"
                >
                  <div class="row">
                    <div class="col-sm-10">
                      <div class="row input-group-text">
                      <label class="col form-label" for="ticket">Número de ticket </label>
                      <input
                        id="ticket"
                        class="col form-control"
                        v-model="ticket"
                        type="text"
                        name="ticket"
                        placeholder="#09675423"
                      >
                      <div class="col">
                        <span id="passwordHelpInline" class="form-text">
                          Ingrese el número del ticket
                        </span>
                      </div>
                      </div>
                      <div class="row input-group-text">
                        <label class="col form-label" for="email">Correo </label>
                        <input
                          id="email"
                          class="col form-control"
                          v-model="email"
                          type="text"
                          name="email"
                          min="0"
                          placeholder="email@fundacionamparo.org.mx"
                        >
                        <div class="col">
                          <span id="passwordHelpInline" class="form-text">
                            Ingrese su correo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="row text-end input-group-text">
                        <input
                          class="col btn btn-outline-primary"
                          type="submit"
                          value="Buscar"
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
</template>

<script>
</script>

<style>
</style>
