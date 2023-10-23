<template>
  <AppNavbar />
  <router-view />
  <FooterComponents />
</template>

<script>

import AppNavbar from './components/NavBarComponent.vue'
import FooterComponents from './components/Footer.vue'


export default {
  components: {
    AppNavbar,
    FooterComponents
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
