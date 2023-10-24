<template>
    <div class="tradingview-widget-section">
      <div ref="widgetContainer" class="tradingview-widget-container">
        <div class="tradingview-widget-container__widget"></div>
        <div class="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MarketOverviewWidget',
    mounted() {
      this.loadTradingViewWidget();
    },
    methods: {
      loadTradingViewWidget() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
        script.innerHTML = JSON.stringify({
          colorTheme: "dark",
          dateRange: "1M",
          showChart: true,
          locale: "en",
          largeChartUrl: "",
          isTransparent: false,
          showSymbolLogo: true,
          showFloatingTooltip: false,
          width: "400",
          height: "600",
          plotLineColorGrowing: "rgba(0, 255, 0, 1)",
          plotLineColorFalling: "rgba(204, 0, 0, 1)",
          gridLineColor: "rgba(240, 243, 250, 0)",
          scaleFontColor: "rgba(106, 109, 120, 1)",
          belowLineFillColorGrowing: "rgba(224, 102, 102, 0.12)",
          belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
          belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
          belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
          symbolActiveColor: "rgba(41, 98, 255, 0.12)",
          tabs: [
            {
              title: "Indices",
              symbols: [
                { s: "BITSTAMP:BTCUSD", d: "BTCUSD" },
                { s: "BITSTAMP:ETHUSD", d: "ETHUSD" },
                { s: "BINANCE:ETHUSDT", d: "ETHUSDT" },
                { s: "BINANCE:XRPUSDT", d: "XRPUSDT" },
                { s: "BINANCE:BTCUSDT", d: "BTCUSDT" }
              ],
              originalTitle: "Indices"
            }
          ]
        });
        this.$refs.widgetContainer.children[0].appendChild(script);
      }
    }
  }
  </script>
  
  <style scoped>
  .tradingview-widget-section {
    background-color: #131722;
    border-radius: 10px;
    margin: 20px;
    padding: 30px;
    float: left;
    width: 30%; 
  }
  
  .tradingview-widget-container {
    background-color: #1e222d;
    border-radius: 6px;
  }
  
  .tradingview-widget-copyright .blue-text {
    color: #d1d4dc;
  }
  
  a {
    text-decoration: none;
    color: #d1d4dc;
  }
  </style>
  