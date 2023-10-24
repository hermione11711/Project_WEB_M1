<template>
    <div class="faq-section">
      <div class="faq-header">Trading FAQ</div>
      <div v-for="item in faqItems" :key="item.question" class="faq-item" @click="toggleAnswer(item)" :class="{ active: isActive(item) }">
        <div class="faq-question">{{ item.question }}</div>
        <div class="faq-answer">{{ item.answer }}</div>
      </div>
    </div>
</template>

  
<script>
export default {
    data() {
      return {
        faqItems: [
          {
            question: "Is trading safe for beginners?",
            answer: "Trading carries risks, especially for beginners. It's essential to educate oneself, start with small amounts, and consider consulting experts or financial advisors."
          },
          {
            question: "How much money should I invest to start trading?",
            answer: "There's no fixed amount to start trading, but it's advised to start with an amount you're willing to lose. Never invest money needed for essential expenses."
          },
          {
            question: "What's the difference between trading and investing?",
            answer: "Trading generally refers to buying and selling securities over short periods aiming for quick profits, while investing is a longer-term approach where you invest in assets believing they will increase in value over time."
          },
          {
            question: "Are trading robots worth it?",
            answer: "Trading robots can automate some tasks and make decisions based on algorithms. However, they don't guarantee profits and carry risks. It's crucial to research and understand how a robot operates before using it."
          }
        ],
        activeItem: null
      };
    },
    methods: {
      toggleAnswer(item) {
        if (this.activeItem === item) {
          this.activeItem = null;
        } else {
          this.activeItem = item;
        }
      },
      isActive(item) {
        return this.activeItem === item;
      }
    }
}
</script>

  

  <style scoped>
  .faq-section {
    font-family: 'Roboto', sans-serif;
    background-color: #131722;
    border-radius: 10px;
    padding: 30px;
    margin: 20px 0;
}

.faq-header {
    font-size: 1.8em;
    color: #d1d4dc;
    text-align: left;
    margin-bottom: 20px;
}

.faq-item {
    border-bottom: 1px solid #d1d4dc;
    padding: 15px 0;
    cursor: pointer;
    transition: background-color .35s ease;
}

.faq-question {
    font-size: 1.2em;
    color: #d1d4dc;
}

.faq-answer {
    display: none;
    margin-top: 15px;
    color: #d1d4dc;
}

.faq-item:hover {
    background-color: #2a2d36;
}

.faq-item.active .faq-answer {
    display: block;
}

</style>
  