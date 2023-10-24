<template>
  <div class="widgets-container">
    <div class="title">Crypto Market View</div> 
    <HeatmapWidget />
    <MarketOverviewWidget />
  </div>
</template>

<script>
import HeatmapWidget from './HeatMapWidget.vue';
import MarketOverviewWidget from './MarketOverviewWidget.vue';

export default {
  components: {
    HeatmapWidget,
    MarketOverviewWidget
  }
}
</script>

<style scoped>
.widgets-container {
  position: relative; 
  display: flex;
  justify-content: space-between; 
  padding: 20px;
  background-color: #131722;
  border-radius: 10px;
  margin: 40px 0 20px 0; 
}

.title { 
  position: absolute;
  top: 10px;
  left: 20px; 
  font-size: 1.5em;
  color: #d1d4dc;
  margin-bottom: 20px;  

}
</style>
