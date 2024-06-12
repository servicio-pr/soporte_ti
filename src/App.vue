<template>
  <nav>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/tickets">Tickets</router-link> |
    <router-link to="/sesion">Inicio de sesión</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c2963;

    &.router-link-exact-active {
      color: #7b5fc7;
    }
  }
}
</style>
