<template>
    <div class="news-section">
    <div class="news-header">Crypto News</div>
    <div class="news-container">
      <div v-for="item in newsData" :key="item.news_url" class="news-item">
        <a :href="item.news_url" target="_blank">
          <img :src="item.image_url" alt="Image" class="news-image"/>
          <h2 class="news-title">{{ item.title }}</h2>
        </a>
        <p class="news-text">{{ item.text }}</p>
        <p class="news-source">Source: {{ item.source_name }} | Date: {{ item.date }}</p>
        <p class="news-sentiment">Sentiment: {{ item.sentiment }}</p>
        <p class="news-tickers">Tickers: {{ item.tickers.join(', ') }}</p>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newsData: [
        {
            "news_url": "https://ambcrypto.com/whats-causing-uniswaps-price-to-slump/",
            "image_url": "https://crypto.snapi.dev/images/v1/z/m/ambcrypto-prompt-an-illustration-depicting-the-picture-of-a-u-fbe8b6ce-2e29-485d-8191-59c5b1ef94d7-381161.jpg",
            "title": "What's causing Uniswap's price to slump?",
            "text": "UNI has witnessed a significant decline in demand since the month started. This has resulted in a double-digit decline in the altcoin's value.",
            "source_name": "AMBCrypto",
            "date": "Wed, 18 Oct 2023 15:30:09",
            "topics": [],
            "sentiment": "Negative",
            "type": "Article",
            "tickers": [
                "UNI"
            ]
        },
        {
            "news_url": "https://cointelegraph.com/news/ethereum-defi-protocol-hope-lend-drained-after-exploit",
            "image_url": "https://crypto.snapi.dev/images/v1/t/n/1e300da3-cb71-4c91-8349-1f4b2be8487e-381160.jpg",
            "title": "Ethereum DeFi protocol Hope Lend drained after exploit",
            "text": "The protocol, which had 526 Ether in total value locked, was emptied in an attack on Oct. 18.",
            "source_name": "Cointelegraph",
            "date": "Wed, 18 Oct 2023 15:22:38",
            "topics": [],
            "sentiment": "Negative",
            "type": "Article",
            "tickers": [
                "ETH"
            ]
        },
        {
            "news_url": "https://cryptopotato.com/the-sec-is-finally-engaging-with-bitcoin-etf-applicants-cathie-wood/",
            "image_url": "https://crypto.snapi.dev/images/v1/m/a/cathie-wood-381158.jpg",
            "title": "The SEC is Finally Engaging With Bitcoin ETF Applicants: Cathie Wood",
            "text": "Regulators are sounding much more constructive in their conversations with investment managers about a spot Bitcoin ETF.",
            "source_name": "CryptoPotato",
            "date": "Wed, 18 Oct 2023 15:05:31",
            "topics": [
                "regulations"
            ],
            "sentiment": "Positive",
            "type": "Article",
            "tickers": [
                "BTC"
            ]
        },
        {
            "news_url": "https://www.cryptoglobe.com/latest/2023/10/xrp-btc-eth-ltc-perpetual-futures-launched-for-eligible-non-u-s-users-on-coinbase-advanced/",
            "image_url": "https://crypto.snapi.dev/images/v1/x/c/coinbase-laptop-scaled-381025.jpg",
            "title": "XRP, BTC, ETH, LTC: Perpetual Futures Launched for Eligible Non-U.S. Users on Coinbase Advanced",
            "text": "Coinbase has expanded its trading services to include perpetual futures for eligible customers in specific non-U.S. jurisdictions. ",
            "source_name": "CryptoGlobe",
            "date": "Wed, 18 Oct 2023 10:58:23",
            "topics": [
                "futures"
            ],
            "sentiment": "Positive",
            "type": "Article",
            "tickers": [
                "BTC",
                "ETH",
                "LTC",
                "XRP"
            ]
        },
        {
            "news_url": "https://u.today/xrp-btc-eth-rewards-for-traders-announced-by-bitrue?utm_source=snapi",
            "image_url": "https://crypto.snapi.dev/images/v1/d/m/41209-380900.jpg",
            "title": "XRP, BTC, ETH Rewards for Traders Announced by Bitrue",
            "text": "Singapore-based crypto exchange Bitrue has announced a promotion for XRP, BTC and ETH holders. They could stand a chance of winning 5,000 TIA by depositing the required amount ($100) in BTC, ETH, XRP, USDT or USDC.",
            "source_name": "UToday",
            "date": "Wed, 18 Oct 2023 08:42:00",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article",
            "tickers": [
                "BTC",
                "ETH",
                "XRP"
            ]
        },
        {
            "news_url": "https://investorplace.com/2023/10/7-cryptos-pop-higher-on-fake-news-that-could-turn-true/",
            "image_url": "https://crypto.snapi.dev/images/v1/5/y/5yh2-380576.jpg",
            "title": "7 Cryptos Pop Higher on \u2018Fake News' That Could Turn True",
            "text": "Thanks to a false news report that was quickly retracted, cryptos soared higher but sustainability now becomes the central concern.",
            "source_name": "Investorplace",
            "date": "Tue, 17 Oct 2023 16:28:22",
            "topics": [],
            "sentiment": "Positive",
            "type": "Article",
            "tickers": [
                "BTC",
                "ETH",
                "USDT",
                "RNDR",
                "SOL",
                "STX",
                "XRP"
            ]
        },
        {
            "news_url": "https://www.newsbtc.com/news/bitcoin/bitcoin-1000000-timeline/",
            "image_url": "https://crypto.snapi.dev/images/v1/g/e/bitcoin-price-1000000pngfit8002c448-381150.jpg",
            "title": "When Will Bitcoin Price Reach $1,000,000? Pundit Lays Out A Timeline",
            "text": "Since the Bitcoin Price crossed $50,000 back in the 2021 bull market, there have been speculations on when the price will hit $100,000, and on the other extreme end, $1,000,000.",
            "source_name": "NewsBTC",
            "date": "Wed, 18 Oct 2023 15:00:03",
            "topics": [
                "priceforecast",
                "pricemovement"
            ],
            "sentiment": "Positive",
            "type": "Article",
            "tickers": [
                "BTC"
            ]
        },
        {
            "news_url": "https://cointelegraph.com/news/bitcoin-price-holds-as-institutional-investor-boosts-sentiment",
            "image_url": "https://crypto.snapi.dev/images/v1/l/h/6e689e2e-c3ac-4628-a4a9-5af11c4f04fd-381152.jpg",
            "title": "Bitcoin price holds $28K range as institutional investor maneuvering boosts sentiment",
            "text": "Comments from institutional investors and amendments to the spot Bitcoin ETF applications could be behind the recent improvement in investor sentiment.",
            "source_name": "Cointelegraph",
            "date": "Wed, 18 Oct 2023 14:58:02",
            "topics": [
                "institutions",
                "pricemovement"
            ],
            "sentiment": "Positive",
            "type": "Article",
            "tickers": [
                "BTC"
            ]
        }
        
        ]
      };
    }
  };
  </script>
  
  <style scoped>

  .news-section {
    background-color: #131722; /* Couleur de fond supplémentaire */
    border-radius: 10px; /* Ajoute des coins arrondis */
    padding: 30px; /* Ajoute un peu d'espace autour du contenu */
    margin: 20px 0; /* Ajoute un peu d'espace autour de la section des news */
  }
  
  .news-header {
    font-size: 1.5em; /* Taille du texte */
    color: #d1d4dc; /* Couleur du texte */
    text-align: left; /* Alignement du texte à droite */
    margin-bottom: 10px; /* Ajoute un peu d'espace en dessous du titre */
  }
  
  .news-container {
    display: flex;
    flex-wrap: wrap; /* Permet aux éléments de passer à la ligne suivante lorsqu'il n'y a plus de place */
    gap: 70px; /* Réduit l'espace entre les éléments */
    padding-top: 20px;
    padding-left: 90px;
    background-color: #131722;
  }
  
  .news-item {
    background-color: #1e222d;
    box-shadow: inset 0 0 0 1px #1e222d;
    width: 350px; /* Largeur fixe spécifiée */
    height: 400px;
    padding: 16px 12px 20px; /* Padding spécifié */
    border-radius: 6px; /* Rayon de bordure spécifié */
    box-sizing: border-box; /* Boîte de dimensionnement spécifié */
    color: #d1d4dc; /* Couleur de texte spécifiée */
    transition: background-color .35s ease;
    font-size: 15px;
    text-decoration: none; /* Retire la décoration du texte pour les liens */
    margin: 0; /* Réduit la marge autour de chaque élément de news */
  }
  
  .news-item .news-text {
    max-height: calc(100% - 100px); /* Ajustez cette valeur pour qu'elle corresponde à l'espace disponible */
    overflow-y: auto; /* Ajoute une barre de défilement verticale si nécessaire */
  }
  
  .news-image {
    width: 160px;
    height: 100px;
    margin-bottom: 10px;
  }
  
  .news-title {
    font-size: 1.5em;
    margin: 0 0 10px 0;
  }
  
  .news-text {
    font-size: 1em;
    margin-bottom: 10px;
  }
  
  .news-source, .news-sentiment, .news-tickers {
    font-size: 0.8em;
    margin-bottom: 5px;
  }
  
  a {
    text-decoration: none;
    color: #d1d4dc; /* Couleur de lien adaptée */
  }
  
  /* Ajout d'un hover effet sur les éléments de news */
  .news-item:hover {
    background-color: #2a2d36;
  }
  
  </style>
  
  