<template>
  <div class="Info_ticket">
    <h3>Información de ticket</h3>
    <form id="info"
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
                  placeholder="#01234567"
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
    <table class="table-primary" id="info">
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
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
        </tr>
      </tbody>
    </table>
    <table id="respuestas table">
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
    <form id="resp"
        @submit="checkForm"
        accion ="hhtps://vuejs.org/"
        method = "post"
        >
        <p>
          <label for="resp">Respuesta:  </label>
          <input
            id="resp"
            v-model="resp"
            type="text"
            name="resp"
          >
      </p>
      <p>
        <label for="file">Evidencias:  </label>
        <input
            type="file"
            id="fileInput"
            @change="handleFileUpload"
        >
    </p>
    <p>
      <label for="centro">Cambiar estatus </label>
      <select
          id="estatus"
      >
          <option>Proceso</option>
          <option>Terminado</option>
      </select>
  </p>
    <p>
      <input
        type="submit"
        value="Enviar respuesta"
      >
  </p>
    </form>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
</style>
