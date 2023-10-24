<template>
    <div class="page-container">
        <Introduction />
        <TradingGuide />
        <YoutubeVideoBeginners />
        <Ressources />
        <FAQGuide />
    </div>
  </template>
  
  <script>

import Introduction from '../components/IntroCrpytoTrading.vue'
import TradingGuide from '../components/TradingGuide.vue'
import YoutubeVideoBeginners from '../components/YoutubeVideoBeginners.vue'
import Ressources from '../components/RessourcesBeginners.vue'
import FAQGuide from '../components/FAQGuide.vue'

  
  export default {
  components: {
    Introduction,
    TradingGuide,
    YoutubeVideoBeginners,
    Ressources,
    FAQGuide,
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
  