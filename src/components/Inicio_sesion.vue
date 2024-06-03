<template>
    <div class="nuevo_ticket">
        <h1>Inicie sesión para acceder a todas las funciones</h1>
        <form id="nuevo"
        @submit="checkForm"
        accion ="hhtps://vuejs.org/"
        method = "post"
        >
            <p>
                <label for="usuario">Usuario </label>
                <input
                  id="usuario"
                  v-model="usuario"
                  type="text"
                  name="usuario"
                >
            </p>
            <p>
                <label for="pass">Contraseña </label>
                <input
                  id="pass"
                  v-model="pass"
                  type="text"
                  name="pass">
            </p>
            <p>
                <label for="centro">Tipo usuario </label>
                <select
                    id=""
                >
                    <option>Direccion</option>
                    <option>Analista</option>
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
