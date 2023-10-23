<template>
  <div>
    <div class="sub-menu">
      <span class="menu-item" @click="goToCrypto">Cryptocurrency</span>
      <span class="separator">|</span>
      <span class="menu-item" @click="goToMarketAnalysis" v-if="isLoggedIn">Market Analysis Tools</span>
      <span class="separator" v-if="isLoggedIn">|</span>
      <span class="menu-item" @click="goToBigenner">Beginner's Guide</span>
    </div>
    <trading-view-timeline-widget />
    <youtube-video />
  </div>
</template>




<script>
import { useRouter } from 'vue-router';
import TradingViewTimelineWidget from '@/components/TradingViewTimelineWidget.vue';
import YoutubeVideo from '@/components/YoutubeVideo.vue';
import { ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue'; 
import { watch } from 'vue';


export default {
  components: {
    TradingViewTimelineWidget,
    YoutubeVideo,
  },
  setup() {
    const { isAuthenticated } = useAuth0();
    const isLoggedIn = ref(isAuthenticated.value);

    watch(isAuthenticated, (newVal) => {
    isLoggedIn.value = newVal;
  });
    
    const router = useRouter();  

    const goToMarketAnalysis = () => {
      if (isLoggedIn.value) {
        router.push({ name: 'MarketAnalysisTool' });
      } else {
        alert("You must be logged in to access this tool.");
      }
    };

    const goToCrypto = () => {
    router.push({ name: 'Crypto' }); 
  };

  const goToBigenner = () => {
    router.push({ name: 'Beginner' });
  };

  return {
      isLoggedIn,
      goToCrypto,
      goToMarketAnalysis,
      goToBigenner
    };
  },
};
</script>



<style scoped>

div {
  width: 100%;
  height: 50vh; 
  background-color: #3f434e;
  padding-top: 60px; 
}

.sub-menu {
  text-align: center; 
  font-size: 1.5em; 
  height: 1px;
  
}

.sub-menu .menu-item {
  border-radius: 20px;  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
  color: #ffffff; 
  cursor: pointer; 
  padding: 5px 10px;  
  border-bottom: 2px solid transparent;  
  transition: border-color 0.3s, background-color 0.3s;  
}

.sub-menu .menu-item:hover {
  border-bottom-color: #2a2d36;  
  background-color: #1e222d;  
}



.separator {
  margin: 0 100px; 
  color: #2a2d36; 
}

</style>









