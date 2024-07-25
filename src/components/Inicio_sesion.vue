<template>
    <div class="container-fluid" id="is">
        <div class="row">
            <div class="col">
                <div class="card text-bg-dark border dark-border-subtle rounded-4">
                    <div class="card-body">
                        <h2>Iniciar sesión</h2>
                        <p>Ingrese los datos necesarios para iniciar sesión, una vez lo haga podrá visualizar información relevante respecto a los tickets.</p>
                        <form id="sesion"
                        @submit.prevent="inicioSesion"
                        accion ="hhtps://vuejs.org/"
                        method = "post"
                        >
                            <div class="row input-group-text text-bg-dark">
                                <label class="col form-label" for="usuario">Correo </label>
                                <input
                                id="correo"
                                class="col form-control text-bg-dark"
                                v-model="User.correo"
                                type="text"
                                name="correo"
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
                                v-model="User.pass"
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
                                    v-model="User.selectTipoUsuario"
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
// import axios from 'axios';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Inicio_sesion',
  data () {
    return {
      User: {
        correo: '',
        pass: '',
        selectTipoUsuario: ''
      }
    }
  },
  computed: {
    ...mapGetters('tema', ['temas']),
    ...mapGetters('centro', ['centros'])
  },
  methods: {
    ...mapActions('tema', ['fetchTemas']),
    ...mapActions('centro', ['fetchCentros']),
    ...mapActions('inicioSesion', ['handleInicioSesion']),
    ...mapActions('inicioSesion', ['iniciarSesion']),
    async inicioSesion () {
      try {
        const response = await this.iniciarSesion(this.User)
        this.User = {
          correo: '',
          selectTipoUsuario: '',
          pass: ''
        }
        // console.log('Response:::', response)
        const token = response.data.token
        sessionStorage.setItem('token', token)
        await this.handleInicioSesion()
        // const user = response.data.user
        // this.login(user)
      } catch (error) {
        console.error('Error al iniciar sesion:', error)
      }
    },
    async handleInicioSesion () {
      await this.fetchTemas()
      await this.fetchCentros()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
