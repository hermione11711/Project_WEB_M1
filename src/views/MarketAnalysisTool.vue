

<template>
    <div class="market-analysis-tools">
        <RealTimeChart />
    </div>
  </template>
  
  <script>
  import RealTimeChart from '../components/RealTimeChart.vue';
  export default {
    components: {
        RealTimeChart,

    },
    name: 'MarketAnalysisTools',
  }
  </script>
  
  <style scoped>
  .market-analysis-tools {
      background-color:#3f434e;
      padding-top: 50px;
  }
  </style>
  
  