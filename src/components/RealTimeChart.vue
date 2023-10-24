<template>
    <div class="widgets-container">
      <div class="tradingview-chart-section">
        <div class="section-title">
          Real-Time Chart
        </div>
        <div class="tradingview-widget-container">
          <div id="tradingview_568ab"></div>
          <div class="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            </a>
          </div>
        </div>
      </div>
      <div class="trading-platforms-section">
        <div class="section-title">
          Trading Platforms
        </div>
        <div class="trading-platforms-links">
          <a href="https://www.coinbase.com/" target="_blank" rel="noopener noreferrer">
            <img src="../assets/Coinbase.png" alt="Coinbase Logo" class="platform-logo">
            Coinbase
          </a>
          <a href="https://www.binance.com/" target="_blank" rel="noopener noreferrer">
            <img src="../assets/Binance.png" alt="Binance Logo" class="platform-logo">
            Binance
          </a>
          <a href="https://www.kraken.com" target="_blank" rel="noopener noreferrer">
            <img src="../assets/Kraken.png" alt="Kraken Logo" class="platform-logo">
            Kraken
          </a>
        </div>
      </div>
    </div>
</template>


  <script>
  export default {
    name: 'TradingViewWidgets',
    mounted() {
      this.initTradingViewChartWidget();
    },
    methods: {
      initTradingViewChartWidget() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
          new window.TradingView.widget({
            width: 1280,
            height: 720,
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: true,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            container_id: "tradingview_568ab"
          });
        };
        document.body.appendChild(script);
      }
    }
  };
  </script>

  <style scoped>
  .widgets-container {
    background-color: #131722;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;  
  }

  .section-title {
    font-size: 1.5em;
    color: #d1d4dc;
    margin-bottom: 10px;
    text-align: left;  
    width: 100%;  
  }

  .tradingview-chart-section {
    width: 100%;  
  }

  .tradingview-widget-container {
    background-color: #1e222d;
    border-radius: 6px;
    padding: 20px;
    margin: 0 auto;  
  }

  .trading-platforms-section {
    margin-top: 20px;
    padding: 20px;
    background-color: #1e222d;
    border-radius: 10px;
  }

  .trading-platforms-links a {
    margin-right: 10px;
    color: #d1d4dc;
    text-decoration: none;
  }

  .trading-platforms-links a:hover {
    text-decoration: underline;
  }

  .trading-platforms-links a {
      margin-right: 10px;
      color: #d1d4dc;
      text-decoration: none;
      display: flex;
      align-items: center;  /* Centre le texte avec le logo */
      margin-bottom: 10px;  /* Ajoute un peu d'espace entre les liens */
    }

    .platform-logo {
      margin-right: 5px;  /* Ajoute un peu d'espace entre le logo et le texte */
      width: 32px;  /* Définit une largeur fixe pour les logos */
      height: 32px;  /* Définit une hauteur fixe pour les logos */
    }

    .trading-platforms-links a:hover {
      text-decoration: underline;
    }
  </style>
