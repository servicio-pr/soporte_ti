<template>
  <nav id="navbar" class="navbar nav-fill navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid justify-content-center">
      <div class="row">
        <div class="col-2">
          <a class="navbar-brand ml-3" href="#">
            <router-link to="/">Inicio</router-link>
          </a>
        </div>
        <div class="col-2">
          <a class="nav-link" href="#">
            <router-link to="/tickets">Tickets</router-link>
          </a>
        </div>
        <div class="col-6">
          <a class="">
            <form class="d-flex" role="search">
              <input class="form-control s-nv" type="search" placeholder="Número de ticket" aria-label="Search">
              <button class="btn btn-outline-primary b-nv" type="submit">Buscar ticket</button>
            </form>
          </a>
        </div>
        <div class="col-2">
          <a class="nav-link d-flex" href="#">
            <router-link to="/sesion">Inicio de sesión</router-link>
        </a>
        </div>
      </div>
    </div>
  </nav>
  <div class="container-fuid justify-content-center">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  font: 1rem/1.5 var(--bs-font-sans-serif);
}
#is {
  margin-top: 10px;
  padding: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.row {
  margin: 3px;
}
.col {
  margin-top: 5px;
}
.s-nv, .b-nv {
  margin-left : 5px;
  margin-right: 5px;
}
</style>
