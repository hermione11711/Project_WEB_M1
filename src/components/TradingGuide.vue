<template>
    <div class="guides-section">
        <div class="guides-header">Step-by-Step Guides</div>
        <div class="guides-container">
            <div class="guide-item">
                <h3>1. How to Start Trading</h3>
                <p>Choose a reliable trading platform, create an account, deposit funds, and start trading on assets of your choice.</p>
            </div>
            <div class="arrow-container">
                <img src="../assets/arrow_right.png" alt="Next Step" />
            </div>
            <div class="guide-item">
                <h3>2. How to Secure Your Investments</h3>
                <p>Secure your investments by using reputable platforms, enabling two-factor authentication, and following good security practices.</p>
            </div>
            <div class="arrow-container">
                <img src="../assets/arrow_right.png" alt="Next Step" />
            </div>
            <div class="guide-item">
                <h3>3. How to Trade on Different Platforms</h3>
                <p>Create accounts on different platforms, deposit funds, choose your trading pairs/assets and start trading.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepByStepGuides'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'); /* Import Roboto font from Google Fonts */

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
    margin-bottom: 10px;
}

.guides-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 20px;
}

.guide-item, .arrow-container {
    background-color: #1e222d;
    box-shadow: inset 0 0 0 1px #1e222d;
    padding: 16px 12px 20px;
    border-radius: 6px;
    box-sizing: border-box;
    color: #d1d4dc;
    transition: background-color .35s ease;
    font-size: 15px;
    width: 300px;
    text-align: center;
}

.arrow-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    box-shadow: none;
}

.arrow-container img {
    width: 40px;
    height: auto;
}

h3 {
    font-size: 1.5em;
    margin: 0 0 10px 0;
    text-align: left;
}

p {
    font-size: 1.1em;  /* Adjusted font size */
    margin-bottom: 15px;  /* Adjusted margin */
    text-align: justify;  /* Justify text */
    text-justify: inter-word; /* Improve spacing between words */
}

.guide-item:hover {
    background-color: #2a2d36;
}
</style>
