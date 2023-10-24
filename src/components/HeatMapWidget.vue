<template>
    <div class="tradingview-widget-section">
      <div class="tradingview-widget-container">
        <div ref="widgetContainer" class="tradingview-widget-container__widget"></div>
        <div class="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TradingViewWidget',
    mounted() {
      this.loadTradingViewWidget();
    },
    methods: {
      loadTradingViewWidget() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js';
        script.innerHTML = JSON.stringify({
          dataSource: 'Crypto',
          blockSize: 'market_cap_calc',
          blockColor: 'change',
          locale: 'en',
          symbolUrl: '',
          colorTheme: 'dark',
          hasTopBar: false,
          isDataSetEnabled: false,
          isZoomEnabled: true,
          hasSymbolTooltip: true,
          width: '900',
          height: '660'
        });
        this.$refs.widgetContainer.appendChild(script);
      }
    }
  }
  </script>
  
  <style scoped>
.tradingview-widget-section {
  padding-top: 25px;
  background-color: #131722;
  border-radius: 10px;
  display: flex;  
  justify-content: center;  
  align-items: center;  
  float: left;
  width: 100%;
}

.tradingview-widget-container {
  background-color: #1e222d;
  border-radius: 6px;
  padding: 20px;
}

.tradingview-widget-copyright .blue-text {
  color: #d1d4dc;
}

a {
  text-decoration: none;
  color: #d1d4dc;
}
</style>

  