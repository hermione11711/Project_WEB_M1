<template>
    <div class="guides-section">
      <div class="guides-header">Ressources</div>
      <div class="guide-item">
        <ul>
          <li v-for="book in books" :key="book.title">
            <strong>
              <a :href="`https://www.google.com/search?q=${book.title}`" target="_blank" rel="noopener noreferrer">{{ book.title }}</a>
            </strong>
            By {{ book.author }}: {{ book.description }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        books: [
          { title: "The New Trading for a Living", author: "Dr. Alexander Elder", description: "A comprehensive guide to trading, covering psychology, trading tactics, risk management, and more." },
          { title: "A Beginner's Guide to the Stock Market", author: "Matthew R. Kratter", description: "A concise introduction to the stock market and trading." },
          { title: "Technical Analysis of the Financial Markets", author: "John J. Murphy", description: "A foundational book for anyone wanting to understand technical analysis." },
          { title: "Encyclopedia of Chart Patterns", author: "Thomas N. Bulkowski", description: "A comprehensive reference to chart patterns used by traders." },
          { title: "Trading in the Zone", author: "Mark Douglas", description: "An insight into the psychological challenges of trading and how to overcome them." },
          { title: "The Disciplined Trader", author: "Mark Douglas", description: "Emphasizes the importance of discipline in trading." },
          { title: "Market Wizards", author: "Jack D. Schwager", description: "Interviews with top traders discussing strategies, successes, and failures." },
          { title: "Trend Following", author: "Michael W. Covel", description: "A deep dive into the trend-following strategy and its benefits." },
          { title: "Options as a Strategic Investment", author: "Lawrence G. McMillan", description: "A comprehensive resource on understanding options." },
          { title: "Option Volatility and Pricing", author: "Sheldon Natenberg", description: "A detailed insight into the world of options trading." },
          { title: "Quantitative Trading", author: "Ernie Chan", description: "An introduction to the quantitative approach to trading." },
          { title: "Algorithmic Trading", author: "Ernie Chan", description: "Insights into developing algorithmic trading strategies." },
          { title: "Day Trading and Swing Trading the Currency Market", author: "Kathy Lien", description: "A detailed guide to the forex market." },
          { title: "The Complete Guide to Option Selling", author: "James Cordier & Michael Gross", description: "Focuses on commodities options." },
          { title: "Against the Gods", author: "Peter L. Bernstein", description: "Provides a deep understanding of risk essential for any trader." }
        ]
      }
    }
  }
  </script>

  
  <style scoped>
  .guides-section {
    font-family: 'Roboto', sans-serif;
    background-color: #131722;
    border-radius: 10px;
    padding: 30px;
    margin: 20px 0;
}

.guides-header {
    font-size: 1.5em;
    color: #d1d4dc;
    text-align: left;
    margin-bottom: 20px;
}

.guide-item {
    background-color: #1e222d;
    box-shadow: inset 0 0 0 1px #1e222d;
    padding: 16px 12px 20px;
    border-radius: 6px;
    box-sizing: border-box;
    color: #d1d4dc;
    transition: background-color .35s ease;
    font-size: 15px;
    text-align: left;
}

.arrow-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    box-shadow: none;
    padding-top: 20px;
}

.arrow-container img {
    width: 40px;
    height: auto;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin-bottom: 10px;
}

li:last-child {
    margin-bottom: 0;
}

strong {
    color: #d1d4dc;
    display: block;
    margin-bottom: 5px;
}
a {
    color: #4A90E2; /* Bleu standard pour les liens */
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #357ABD; /* Bleu un peu plus foncé pour le hover */
}
  </style>
  