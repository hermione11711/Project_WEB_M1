<template>
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TradingViewTimelineWidget',
    mounted() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
      script.text = JSON.stringify({
        feedMode: 'market',
        colorTheme: 'dark',
        isTransparent: false,
        displayMode: 'compact',
        width: '100%',
        height: '100%',
        locale: 'en',
        market: 'stock'
      });
      this.$el.appendChild(script);
    },
  };
  </script>
  

<style scoped>
.tradingview-widget-container {
  margin-top: 20px ;
  width: 100%;
  height: 100vh; 
}
</style>
  