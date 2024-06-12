<template>
    <div class="container-md col">
        <h3>Cree una nueva solicitud de ayuda</h3>
        <p>Por favor llene el siguiente formulario para poder comenzar a resolver su inconveniente. </p>
        <form id="nuevo"
        @submit="checkForm"
        accion ="hhtps://vuejs.org/"
        method = "post"
        >
            <p>
                <label for="name">Nombre </label>
                <input
                  id="name"
                  v-model="name"
                  type="text"
                  name="name"
                  placeholder="José Perez Leon"
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
                  placeholder="email@fundacionamparo.org.mx">
            </p>
            <p>
                <label for="number">Número telefónico </label>
                <input
                  id="number"
                  v-model="number"
                  type="int"
                  name="number"
                  placeholder="+52 5566778899">
            </p>
            <p>
                <label for="centro">Centro </label>
                <select
                    id="centro"
                >
                    <option>Oficina central</option>
                    <option>Chamontoya</option>
                    <option>Cuacuila</option>
                    <option>Zacatlán</option>
                </select>
            </p>
            <p>
                <label for="tema">Tema </label>
                <select
                    id="tema"
                >
                    <option>Tema 1</option>
                    <option>Tema 2</option>
                    <option>Tema 3</option>
                    <option>Tema 4</option>
                </select>
            </p>
            <p>
                <label for="subtema">Subtema </label>
                <select
                    id="subtema"
                >
                    <option>Sub Tema 1</option>
                    <option>Sub Tema 2</option>
                    <option>Sub Tema 3</option>
                    <option>Sub Tema 4</option>
                </select>
            </p>
            <p>
                <label for="des">Descripción </label>
                <input
                  id="des"
                  v-model="des"
                  type="text"
                  name="des"
                  placeholder="Descripción detallada del problema"
                >
            </p>
            <p>
                <label for="file">Evidencias  </label>
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
