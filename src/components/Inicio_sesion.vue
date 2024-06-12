<template>
    <div class="nuevo_ticket">
        <h3>Inicie sesión para acceder a todas las funciones</h3>
        <p>Ingrese los datos necesarios para iniciar sesión, una vez lo haga podrá visualizar información relevante respecto a los tickets.</p>
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
                  placeholder="email@fundacionamparo.org.mx"
                >
            </p>
            <p>
                <label for="pass">Contraseña </label>
                <input
                  id="pass"
                  v-model="pass"
                  type="text"
                  name="pass"
                  placeholder="******"
                  >
            </p>
            <p>
                <label for="centro">Tipo usuario </label>
                <select
                    id=""
                >
                    <option>Dirección</option>
                    <option>Analista</option>
                </select>
            </p>
            <p>
                <input
                  type="submit"
                  value="Iniciar sesión"
                >
            </p>
        </form>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
</style>
