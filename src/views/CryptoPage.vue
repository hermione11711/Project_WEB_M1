<template>
    <div class="page-container">
        <CryptoNews />
        <CryptoWidget />

    </div>
  </template>
  
  <script>

  import CryptoNews from '../components/CryptoNewsWidget.vue'
  import CryptoWidget from '../components/WidgetsCryptoContainers.vue'

  
  export default {
  components: {
    CryptoNews,
    CryptoWidget
  }
};

  </script>
  
  <style scoped>

  div {
    padding-top: 50px;

  }
  .page-container {
    background-color: #3f434e; 
    min-height: 100vh; 
  }
  </style>
  