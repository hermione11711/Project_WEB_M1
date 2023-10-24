<template>
    <div class="about-us">
      <h1>About FinInfo</h1>
      <p>Welcome to FinInfo, the premier destination for financial enthusiasts and professionals alike. Here, we provide cutting-edge tools and insights into the world of cryptocurrency, market analysis, and beginner's guides that aim to demystify the financial realm for our users.</p>
      
      <p>We believe in the democratization of financial information, striving to provide accurate and actionable insights to all, from newcomers to seasoned traders. Our commitment is to help you navigate the complex world of finance with confidence and ease.</p>
      
      <h2>Our Team</h2>
      <div class="team">
        <div class="team-member">
          <img src="../assets/team1.png" alt="Team Member 1">
          <p>Alexandre Berthault</p>
        </div>
        <div class="team-member">
          <img src="../assets/team2.png" alt="Team Member 2">
          <p>Mathis Clotteau</p>
        </div>
      </div>
      
      <h2>Disclaimer</h2>
      <p>While we aim to provide accurate and reliable information, trading and investing can be inherently risky endeavors. We strongly advise our users to exercise caution, do thorough research, and, where necessary, consult with financial advisors before making any trading decisions. Lack of expertise and understanding can lead to significant financial losses. Trade responsibly.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs'
  };
  </script>
  
  <style scoped>
  .about-us {
    background-color: #1e222d;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0;
  }
  
  h1, h2 {
    text-align: center;
    margin-bottom: 1em;
  }
  
  p {
    margin-bottom: 1.5em;
    max-width: 800px;
    text-align: justify;
  }
  
  .team {
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-bottom: 2em;
  }
  
  .team-member img {
    max-width: 150px;
    border-radius: 50%;
  }
  
  .team-member p {
    text-align: center;
    margin-top: 0.5em;
  }
  </style>
  