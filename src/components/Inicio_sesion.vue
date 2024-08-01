<template>
    <div class="container-fluid" id="is">
        <div class="row">
            <div class="col">
                <div class="card text-bg-dark border dark-border-subtle rounded-4">
                    <div class="card-body">
                        <h2>Iniciar sesión</h2>
                        <p>Ingrese los datos necesarios para iniciar sesión, una vez lo haga podrá visualizar información relevante respecto a los tickets.</p>
<<<<<<< HEAD
                        <div v-if="showAlertEmail" class="alert alert-info" role="alert">
                            El correo {{ User.correo }}, no es valido.
                            Ingrese su correo institucional o inicie sesión como invitado.
                        </div>
                        <div v-if="showAlertPass" class="alert alert-danger" role="alert">
                          Acceso incorrecto,
                          Verifique sus crdenciales.
                      </div>
=======
                        <div v-if="showAlert" class="alert alert-info" role="alert">
                            El correo {{ User.correo }}, no es valido.
                            Ingrese su correo institucional o inicie sesión como invitado.
                        </div>
>>>>>>> 056742527dbd58444578662e81773ae0d8baac0c
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
<<<<<<< HEAD
                                    v-model="User.SelectUserType"
=======
                                    v-model="userType"
>>>>>>> 056742527dbd58444578662e81773ae0d8baac0c
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
<<<<<<< HEAD
                                    v-model="User.SelectUserType"
=======
                                    v-model="userType"
>>>>>>> 056742527dbd58444578662e81773ae0d8baac0c
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
<<<<<<< HEAD
        SelectUserType: 'usuario'
      },
      error: '',
      showAlertEmail: false,
      showAlertPass: false
=======
        userType: ''
      },
      error: '',
      showAlert: false
>>>>>>> 056742527dbd58444578662e81773ae0d8baac0c
    }
  },
  computed: {
    labelClass () {
<<<<<<< HEAD
      return this.User.SelectUserType === 'usuario' ? 'text-success' : 'text-info'
    },
    labelText () {
      return this.User.SelectUserType === 'usuario'
        ? 'Iniciar sesión como usuario.'
        : 'Iniciar sesión como invitado.'
=======
      return this.userType === 'usuario' ? 'text-success' : 'text-info'
    },
    labelText () {
      return this.userType === 'usuario'
        ? 'Iniciar sesión como usuario seleccionado.'
        : 'Iniciar sesión como invitado seleccionado.'
>>>>>>> 056742527dbd58444578662e81773ae0d8baac0c
    }
  },
  methods: {
    ...mapActions('inicioSesion', ['iniciarSesion']),
    async inicioSesion () {
      this.User.error = ''
      if (!this.validEmail(this.User.correo)) {
<<<<<<< HEAD
        console.log('Valor de SelectUserType', this.User.SelectUserType)
        this.showAlertEmail = true
      } else {
        this.showAlertEmail = false
=======
        console.log('El correo electrónico no es correcto, ingrese su correo institucional')
        this.showAlert = true
      } else {
        this.showAlert = false
>>>>>>> 056742527dbd58444578662e81773ae0d8baac0c
        try {
          const response = await this.iniciarSesion(this.User)
          this.User = {
            correo: '',
<<<<<<< HEAD
            SelectUserType: 'usuario',
            pass: ''
          }
          if (response.data.token) {
=======
            selectTipoUsuario: '',
            pass: ''
          }
          if (response === null) {
            console.log('Errro, no loing')
          } else {
>>>>>>> 056742527dbd58444578662e81773ae0d8baac0c
            const token = response.data.token
            sessionStorage.setItem('token', token)
            const user = response.data.user
            console.log('Bienvenido: ', user.nombre)
            this.$router.push('/sesion')
<<<<<<< HEAD
            this.showAlertPass = false
          }
        } catch (error) {
          console.error('Error al iniciar sesion:', error)
          this.showAlertPass = true
          // aqui definimos que hacer: alerta que indique contraseña incorrecta
=======
          }
        } catch (error) {
          console.error('Error al iniciar sesion:', error)
>>>>>>> 056742527dbd58444578662e81773ae0d8baac0c
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
