<template>
    <div class="intro-section">
        <div class="intro-header">Introduction to Trading</div>
        <div class="intro-container">
            <div class="intro-item">
                <h2>Cryptocurrencies</h2>
                <p>Cryptocurrencies are decentralized digital currencies that use cryptography for securing transactions. They operate on technologies like blockchain, which is a public and immutable ledger. Popular cryptocurrencies include Bitcoin, Ethereum, and Binance Coin.
</p>
            </div>
            <div class="intro-item">
                <h2>Forex (Foreign Exchange)</h2>
                <p>Forex is the market where currencies are traded. It's the largest financial market in the world, with a daily trading volume exceeding $6 trillion. In the forex market, traders buy and sell currencies hoping to make a profit. Major currency pairs include EUR/USD, GBP/USD, and USD/JPY.
</p>
            </div>
            <div class="intro-item">
                <h2>Commodities</h2>
                <p>Commodities are natural resources or agricultural products that can be traded. They are divided into two main categories: Hard commodities (like oil, gold, and natural gas) and soft commodities (like coffee, wheat, and cotton). Commodities trading can be done through futures contracts, which are agreements to buy or sell a specific amount of a commodity at a predetermined price at a specified time in the future.
</p>
            </div>
        </div>
        <!-- You can add links to detailed guides here -->
    </div>
</template>
  
  <script>
  export default {
    name: 'IntroAndGuides'
  };
  </script>
  
  <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'); /* Import Roboto font from Google Fonts */

.intro-section {
    font-family: 'Roboto', sans-serif;  /* Set Roboto font for this section */
    background-color: #131722;
    border-radius: 10px;
    padding: 30px;
    margin: 20px 0;
}

.intro-header {
    font-size: 1.8em;  /* Adjusted font size */
    color: #d1d4dc;
    text-align: left;
    margin-bottom: 10px;
}

.intro-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 70px;
    padding-top: 20px;
    background-color: #131722;
}

.intro-item {
    background-color: #1e222d;
    box-shadow: inset 0 0 0 1px #1e222d;
    width: 350px;
    height: auto;
    padding: 20px 20px 30px;  /* Adjusted padding */
    border-radius: 6px;
    box-sizing: border-box;
    color: #d1d4dc;
    transition: background-color .35s ease;
    text-decoration: none;
    margin: 0;
    line-height: 1.6;  /* Adjusted line height for better readability */
}

h2 {
    font-size: 1.8em;  /* Adjusted font size */
    margin: 0 0 15px 0;  /* Adjusted margin */
}

p {
    font-size: 1.1em;  /* Adjusted font size */
    margin-bottom: 15px;  /* Adjusted margin */
    text-align: justify;  /* Justify text */
    text-justify: inter-word; /* Improve spacing between words */
}

/* Adding a hover effect on the intro items */
.intro-item:hover {
    background-color: #2a2d36;
}

</style>

  