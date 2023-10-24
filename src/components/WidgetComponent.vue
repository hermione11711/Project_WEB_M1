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
    name: 'TradingViewWidget',
    mounted() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.text = JSON.stringify({
        symbols: [
        {
      "proName": "FOREXCOM:SPXUSD",
      "title": "S&P 500"
    },
    {
      "proName": "FOREXCOM:NSXUSD",
      "title": "US 100"
    },
    {
      "proName": "FX_IDC:EURUSD",
      "title": "EUR to USD"
    },
    {
      "description": "Tesla",
      "proName": "NASDAQ:TSLA"
    },
    {
      "description": "Apple",
      "proName": "NASDAQ:AAPL"
    },
    {
      "description": "Nvidia",
      "proName": "NASDAQ:NVDA"
    },
    {
      "description": "Netflix",
      "proName": "NASDAQ:NFLX"
    },
    {
      "description": "Starbucks",
      "proName": "NASDAQ:SBUX"
    }
        ],
        showSymbolLogo: true,
        colorTheme: 'dark',
        isTransparent: true,
        displayMode: 'compact',
        locale: 'en',
      });
      this.$el.appendChild(script);
    },
  };

  </script>
  
  <style scoped>
.tradingview-widget-container {
  margin-left: 20px;
  width: 97% !important;  
  height: 100px !important;
}
  </style>
  