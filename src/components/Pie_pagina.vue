<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div>
                    <a :href="url_PR" target="_blank">
                      <img :src="logo_PR" alt="Logo Proyecto Roberto" />
                    </a>
                    <a :href="url_PR" target="_blank">
                      <img :src="logo_FA" alt="Logo Fundación Amparo" />
                    </a>
                </div>
            </div>
            <div class="col">
                <h5>Nuestro modelo</h5>
                <a class="row" href="https://www.proyectoroberto.org.mx/educacion/" target="_blank">Educación</a>
                <a class="row" href="https://www.proyectoroberto.org.mx/entorno/" target="_blank">Entorno</a>
                <a class="row" href="https://www.proyectoroberto.org.mx/salud/" target="_blank">Salud</a>
                <h5>Nuestros centros</h5>
                <a class="row" href="https://www.proyectoroberto.org.mx/chamontoya/" target="_blank">Chamontoya</a>
                <a class="row" href="https://www.proyectoroberto.org.mx/zacatlan/" target="_blank">Zacatlán</a>
                <a class="row" href="https://www.proyectoroberto.org.mx/cuacuila/" target="_blank">Cuacuila</a>
            </div>
            <div class="col">
                <h5>Legales</h5>
                <a class="row" href="https://www.proyectoroberto.org.mx/aviso-de-privacidad/" target="_blank">Aviso de Privacidad</a>
                <a class="row" href="https://www.proyectoroberto.org.mx/terminos-y-condiciones/" target="_blank">Términos y condiciones</a>
            </div>
            <div class="col">
                <h5>Contacto</h5>
                <p>Corregidora</p>
                <p>Col. Campestre</p>
                <p>Delegación Alvaro Obregón</p>
                <p>CP 01040 CDMX</p>
                <br>
                <p>Llámanos:</p>
                <p>(52+55) 5661 4355</p>
            </div>
        </div>
        <div class="row">
            <p>Copyright © 2024 Proyecto Roberto Alonso Espinoza | contacto@proyectoroberto.org.mx</p>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      logo_PR: require('@/assets/logo.png'),
      logo_FA: require('@/assets/logo_FA.png'),
      url_PR: 'https://www.proyectoroberto.org.mx/',
      url_FA: 'https://www.fundacionamparo.com/'
    }
  }
}
</script>
