<template>
  <div class="Info_ticket">
    <h1>Información de ticket</h1>
    // Se generara un bucle para obtener la info del historial
    <p>Aqui aparece la informacion del ticket</p>
    <form id="nuevo"
        @submit="checkForm"
        accion ="hhtps://vuejs.org/"
        method = "post"
        >
            <p>
                <label for="ticket">Buscar por número de ticket </label>
                <input
                  id="ticket"
                  v-model="ticket"
                  type="text"
                  name="ticket"
                >
            </p>
            <p>
                <label for="email">Correo </label>
                <input
                  id="email"
                  v-model="email"
                  type="text"
                  name="email"
                  min="0">
            </p>
            <p>
                <input
                  type="submit"
                  value="Buscar"
                >
            </p>
        </form>
    <table>
      <thead>
          <tr>
              <th class="uno">
                <p>inicio</p>
              </th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Usuario</td>
              <td>Mes</td>
              <td>Area TI</td>
              <td>Fecha de inicio</td>
              <td>Tiempo invertido</td>
              <td>KPI</td>
              <td>Cumple</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
</style>
