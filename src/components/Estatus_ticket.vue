<template>
  <div class="container-md">
    <h3>Seguimiento de ticket</h3>
    <p>Ingrese el número de ticket para poder validar el estatus del mismo.</p>
    <p>También puede dar seguimiento ingresando su correo electrónico con el que realizo la solicitud.</p>
    <form id="estatus"
        @submit="checkForm"
        accion ="hhtps://vuejs.org/"
        method = "post"
        >
            <p>
                <label for="ticket">Número de ticket </label>
                <input
                  id="ticket"
                  v-model="ticket"
                  type="text"
                  name="ticket"
                  placeholder="#09675423"
                >
            </p>
            <p>
                <label for="email">Correo </label>
                <input
                  id="email"
                  v-model="email"
                  type="text"
                  name="email"
                  min="0"
                  placeholder="email@fundacionamparo.org.mx"
                >
            </p>
            <p>
                <input
                  type="submit"
                  value="Buscar"
                >
            </p>
        </form>
  </div>
</template>

<script>
</script>

<style>
</style>
