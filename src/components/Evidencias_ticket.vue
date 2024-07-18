<template>
    <div class="container-fluid bs-body-bg">
      <div class="row">
        <div class="col">
          <div class="card text-bg-dark border dark-border-subtle rounded-4">
            <div class="card-body">
              <h3>Evidencias</h3>
              <button @click="count++">
                You clicked me {{ count }} times.
              </button>
              <table class="table-dark">
                <thead>
                  <tr>
                    <td>Evidencia</td>
                    <td>Usuario</td>
                    <td>Fecha</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<style>
</style>
