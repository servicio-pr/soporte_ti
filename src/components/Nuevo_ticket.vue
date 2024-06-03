<template>
    <div class="nuevo_ticket">
        <h1>Cree una nueva solicitud de ayuda</h1>
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
                <label for="number">Numero telefónico </label>
                <input
                  id="number"
                  v-model="number"
                  type="int"
                  name="number">
            </p>
            <p>
                <label for="centro">Centro </label>
                <select
                    id=""
                >
                    <option>Star Wars</option>
                    <option>Vanilla Sky</option>
                    <option>Atomic Blonde</option>
                </select>
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
