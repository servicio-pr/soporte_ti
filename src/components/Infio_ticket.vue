<template>
  <div class="Estatus_ticket">
    <h1>Seguimiento de ticket</h1>
    // Se generara un bucle para obtener la info del historial
    <p>Aqui aparece la informacion del ticket</p>
    <form id="nuevo"
        @submit="checkForm"
        accion ="hhtps://vuejs.org/"
        method = "post"
        >
            <p>
                <label for="res">Responder: </label>
                <input
                  id="res"
                  v-model="res"
                  type="text"
                  name="res"
                >
            </p>
            <p>
              <label for="file">Adjuntar evidencias  </label>
              <input
                  type="file"
                  id="fileInput"
                  @change="handleFileUpload"
              >
          </p>
            <p>
                <input
                  type="submit"
                  value="Enviar"
                >
            </p>
        </form>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
</style>
