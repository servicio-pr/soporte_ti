<template>
    <div class="container-md bs-body-bg">
        <div class="row justify-content-md-center">
            <div class="col">
                <div class="card mb-3">
                    <div class="card-body">
                        <h3>Cree una nueva solicitud de ayuda</h3>
                        <p>Por favor llene el siguiente formulario para poder comenzar a resolver su inconveniente. </p>
                    <form id="nuevo"
                    @submit="checkForm"
                    accion ="hhtps://vuejs.org/"
                    method = "post"
                    >
                        <div class="row input-group-text">
                            <label class="col form-label" for="name">Nombre </label>
                            <input
                            id="name"
                            class="col form-control"
                            v-model="name"
                            type="text"
                            name="name"
                            placeholder="José Perez Leon"
                            >
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text">
                                    Ingrese su nombre completo
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text">
                            <label class="col form-label" for="email">Correo </label>
                            <input
                            id="email"
                            class="col form-control"
                            v-model="email"
                            type="text"
                            name="email"
                            min="0"
                            placeholder="email@fundacionamparo.org.mx">
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text">
                                    Ingrese su correo laboral
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text">
                            <label class="col form-label" for="number">Número telefónico </label>
                            <input
                            id="number"
                            class="col form-control"
                            v-model="number"
                            type="int"
                            name="number"
                            placeholder="+52 5566778899">
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text">
                                    Número telefónico de contacto
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text">
                            <label class="col form-label" for="centro">Centro </label>
                            <select
                                id="centro"
                                class="col form-select"
                            >
                                <option>Oficina central</option>
                                <option>Chamontoya</option>
                                <option>Cuacuila</option>
                                <option>Zacatlán</option>
                            </select>
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text">
                                    Lugar donde se precenta el problema
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text">
                            <label class="col form-label" for="tema">Tema </label>
                            <select
                                id="tema"
                                class="col form-select"
                            >
                                <option>Tema 1</option>
                                <option>Tema 2</option>
                                <option>Tema 3</option>
                                <option>Tema 4</option>
                            </select>
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text">
                                    Seleccione el tema a tratar
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text">
                            <label class="col form-label" for="subtema">Subtema </label>
                            <select
                                id="subtema"
                                class="col form-select"
                            >
                                <option>Sub Tema 1</option>
                                <option>Sub Tema 2</option>
                                <option>Sub Tema 3</option>
                                <option>Sub Tema 4</option>
                            </select>
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text">
                                    Selecciona el subtema
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text">
                            <label class="col form-label" for="des">Descripción </label>
                            <div class="col-auto">
                                <span id="passwordHelpInline" class="form-text">
                                    Describa el problema lo más preciso y detalladamente posible.
                                </span>
                            </div>
                        </div>
                        <div class="row">
                            <input
                            id="des"
                            class="form-control"
                            v-model="des"
                            type="text"
                            name="des"
                            placeholder="Descripción detallada del problema"
                            >
                        </div>
                        <div class="row input-group-text">
                            <label class="col form-label" for="file">Evidencias  </label>
                            <input
                                type="file"
                                class="col form-control"
                                id="fileInput"
                                @change="handleFileUpload"
                            >
                            <div class="col">
                                <span id="passwordHelpInline" class="form-text">
                                    Seleccione el archivo que nos pueda ayudar a visualizar el problema.
                                </span>
                            </div>
                        </div>
                        <div class="row input-group-text">
                            <input
                            class="col btn btn-outline-primary"
                            type="submit"
                            value="Enviar"
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
