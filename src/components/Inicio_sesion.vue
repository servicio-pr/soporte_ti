<template>
    <div class="container-fluid" id="is">
        <div class="row">
            <div class="col">
                <div class="card text-bg-dark border dark-border-subtle rounded-4">
                    <div class="card-body">
                        <h2>Iniciar sesión</h2>
                        <p>Ingrese los datos necesarios para iniciar sesión, una vez lo haga podrá visualizar información relevante respecto a los tickets.</p>
                        <form id="sesion"
                        @submit="checkForm"
                        accion ="hhtps://vuejs.org/"
                        method = "post"
                        >
                            <div class="row input-group-text text-bg-dark">
                                <label class="col form-label" for="usuario">Usuario </label>
                                <input
                                id="usuario"
                                class="col form-control text-bg-dark"
                                v-model="usuario"
                                type="text"
                                name="usuario"
                                placeholder="email@fundacionamparo.org.mx"
                                >
                                <div class="col">
                                    <span id="passwordHelpInline" class="form-text text-bg-dark">
                                        Ingrese su correo oficial.
                                    </span>
                                </div>
                            </div>
                            <div class="row input-group-text text-bg-dark">
                                <label class="col form-label" for="pass">Contraseña </label>
                                <input
                                id="pass"
                                class="col form-control text-bg-dark"
                                v-model="pass"
                                type="text"
                                name="pass"
                                placeholder="******"
                                >
                                <div class="col">
                                    <span id="passwordHelpInline" class="form-text text-bg-dark">
                                        Ingrese su contraseña.
                                    </span>
                                </div>
                            </div>
                            <div class="row input-group-text text-bg-dark">
                                <label class="col form-label" for="centro">Tipo de usuario </label>
                                <select
                                    id=""
                                    class="col form-select text-bg-dark"
                                >
                                    <option>Dirección</option>
                                    <option>Analista</option>
                                </select>
                                <div class="col">
                                    <span id="passwordHelpInline" class="form-text text-bg-dark">
                                        Selccione su tipo de ususario.
                                    </span>
                                </div>
                            </div>
                            <div class="row input-group-text text-bg-dark">
                                <input
                                class="btn btn-outline-primary"
                                type="submit"
                                value="Iniciar sesión"
                                >
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

<style scoped lang="scss">
</style>
