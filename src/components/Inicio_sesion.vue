<template>
    <div class="container-fluid bs-body-bg" id="is">
        <div class="row">
            <div class="col">
                <div class="card mb-6">
                    <div class="card-body">
                        <h3>Inicie sesión para acceder a todas las funciones</h3>
                        <p>Ingrese los datos necesarios para iniciar sesión, una vez lo haga podrá visualizar información relevante respecto a los tickets.</p>
                        <form id="sesion"
                        @submit="checkForm"
                        accion ="hhtps://vuejs.org/"
                        method = "post"
                        >
                            <div class="row input-group-text">
                                <label class="col form-label" for="usuario">Usuario </label>
                                <input
                                id="usuario"
                                class="col form-control"
                                v-model="usuario"
                                type="text"
                                name="usuario"
                                placeholder="email@fundacionamparo.org.mx"
                                >
                                <div class="col">
                                    <span id="passwordHelpInline" class="form-text">
                                        Ingrese su correo oficial.
                                    </span>
                                </div>
                            </div>
                            <div class="row input-group-text">
                                <label class="col form-label" for="pass">Contraseña </label>
                                <input
                                id="pass"
                                class="col form-control"
                                v-model="pass"
                                type="text"
                                name="pass"
                                placeholder="******"
                                >
                                <div class="col">
                                    <span id="passwordHelpInline" class="form-text">
                                        Ingrese su contraseña.
                                    </span>
                                </div>
                            </div>
                            <div class="row input-group-text">
                                <label class="col form-label" for="centro">Tipo usuario </label>
                                <select
                                    id=""
                                    class="col form-select"
                                >
                                    <option>Dirección</option>
                                    <option>Analista</option>
                                </select>
                                <div class="col">
                                    <span id="passwordHelpInline" class="form-text">
                                        Selccione su tipo de ususario.
                                    </span>
                                </div>
                            </div>
                            <div class="row input-group-text">
                                <input
                                class="col btn btn-outline-primary"
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
