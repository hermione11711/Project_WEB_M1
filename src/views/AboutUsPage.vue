<template>
    <div class="page-container">
        <AboutUs />


    </div>
  </template>
  
  <script>

import AboutUs from '../components/AboutUsComponents.vue'

  
  export default {
  components: {
    AboutUs
  }
};

  </script>
  
  <style scoped>

  div {
    padding-top: 50px;

  }
  .page-container {
    min-height: 100vh; 
  }
  </style>
  