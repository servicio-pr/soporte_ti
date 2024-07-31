<template>
    <div class="container-fluid" id="is">
        <div class="row">
            <div class="col">
                <div class="card text-bg-dark border dark-border-subtle rounded-4">
                    <div class="card-body">
                        <h2>Iniciar sesión</h2>
                        <p>Ingrese los datos necesarios para iniciar sesión, una vez lo haga podrá visualizar información relevante respecto a los tickets.</p>
                        <div v-if="showAlert" class="alert alert-info" role="alert">
                            El correo {{ User.correo }}, no es valido.
                            Ingrese su correo institucional o inicie sesión como invitado.
                        </div>
                        <form id="sesion"
                        @submit.prevent="inicioSesion"
                        action ="https://vuejs.org/"
                        method = "post"
                        >
                            <div class="row input-group-text text-bg-dark">
                                <div class="col">
                                    <input
                                    type="radio"
                                    class="btn-check"
                                    name="options-outlined"
                                    id="radioUsuario"
                                    autocomplete="off"
                                    v-model="userType"
                                    value="usuario"
                                    checked>
                                    <label class="btn btn-outline-success" for="radioUsuario">Iniciar sesión como usuario</label>
                                </div>
                                <div class="col">
                                    <span :class="labelClass" for="selectUserType">{{ labelText }}</span>
                                </div>
                                <div class="col">
                                    <input
                                    type="radio"
                                    class="btn-check"
                                    name="options-outlined"
                                    id="radioInvitado"
                                    autocomplete="off"
                                    v-model="userType"
                                    value="invitado"
                                    >
                                    <label class="btn btn-outline-info" for="radioInvitado">Iniciar sesión como invitado</label>
                                </div>
                            </div>
                            <div class="row input-group-text text-bg-dark">
                                <label class="col form-label" for="correo">Correo </label>
                                <input
                                id="correo"
                                class="col form-control text-bg-dark"
                                v-model.trim="User.correo"
                                type="text"
                                name="correo"
                                placeholder="email@fundacionamparo.org.mx"
                                aria-describedby="correoHelp"
                                >
                                <div class="col">
                                    <span id="correoHelp" class="form-text text-bg-dark">
                                        Ingrese su correo oficial.
                                    </span>
                                    <span v-if="error">{{ error }}</span>
                                </div>
                            </div>
                            <div class="row input-group-text text-bg-dark">
                                <label class="col form-label" for="pass">Contraseña </label>
                                <input
                                id="pass"
                                class="col form-control text-bg-dark"
                                v-model.trim="User.pass"
                                type="password"
                                name="pass"
                                placeholder="******"
                                aria-describedby="passwordHelp"
                                >
                                <div class="col">
                                    <span id="passwordHelp" class="form-text text-bg-dark">
                                        Ingrese su contraseña.
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
import { mapActions } from 'vuex'

export default {
  name: 'Inicio_sesion',
  data () {
    return {
      User: {
        correo: '',
        pass: '',
        userType: ''
      },
      error: '',
      showAlert: false
    }
  },
  computed: {
    labelClass () {
      return this.userType === 'usuario' ? 'text-success' : 'text-info'
    },
    labelText () {
      return this.userType === 'usuario'
        ? 'Iniciar sesión como usuario seleccionado.'
        : 'Iniciar sesión como invitado seleccionado.'
    }
  },
  methods: {
    ...mapActions('inicioSesion', ['iniciarSesion']),
    async inicioSesion () {
      this.User.error = ''
      if (!this.validEmail(this.User.correo)) {
        console.log('El correo electrónico no es correcto, ingrese su correo institucional')
        this.showAlert = true
      } else {
        this.showAlert = false
        try {
          const response = await this.iniciarSesion(this.User)
          this.User = {
            correo: '',
            selectTipoUsuario: '',
            pass: ''
          }
          if (response === null) {
            console.log('Errro, no loing')
          } else {
            const token = response.data.token
            sessionStorage.setItem('token', token)
            const user = response.data.user
            console.log('Bienvenido: ', user.nombre)
            this.$router.push('/sesion')
          }
        } catch (error) {
          console.error('Error al iniciar sesion:', error)
        }
      }
    },
    validEmail (correo) {
      const domain = correo.split('@')[1]
      return domain === 'proyectoroberto.org.mx'
    }
  }
}
</script>

<style scoped lang="scss">
</style>
