<template>
  <nav>
    <div class="greeting" v-if="isAuthenticated && user">
      <div>Bonjour</div>
      <div>{{ user.name }} !</div>
    </div>
    <div class="widget-container">
      <TradingViewWidget />
    </div>
    <div class="logo">
      <img src="../assets/Fininfo.png" alt="Logo">
    </div>
    <div class="nav-links">
      <span class="nav-link" @click="goHome">Accueil</span>
      <span class="nav-link" @click="goToAboutUs">About us</span>
      <a href="#" v-if="!isAuthenticated" @click.prevent="login">Log in</a>
      <a href="#" v-if="isAuthenticated" @click.prevent="logout">Log out</a>
    </div>
  </nav>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';
import TradingViewWidget from './WidgetComponent.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'AppNavbar',
  components: {
    TradingViewWidget
  },
  computed: {
    isLoggedIn() {
      return this.isAuthenticated;
    }
  },
  setup() {
    const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();
    const router = useRouter();  

    const goToAboutUs = () => {
      router.push({ name: 'AboutUs' });
    };

    const goHome = () => {
      router.push({ name: 'Home' });  
    };

    const profile = () => {
    };

    return {
      goToAboutUs,
      isAuthenticated,
      login: loginWithPopup,
      logout,
      goHome,  
      profile,
      user
    };
  },
};
</script>


<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 99%;
  background-color: #1e222d;
  border-color: #757983;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  z-index: 1000; 
}

.widget-container {
flex-grow: 1;
text-align: center;
}

.logo {
margin-left: auto;  
}

.logo img {
height: 80px;  
}

.nav-links a {
margin: 0 1rem;
color: white;
text-decoration: none;
}
.tradingview-widget-container {
  margin-left: 20px;
  width: 97% ;
}

.nav-link {
    cursor: pointer; 
    padding: 5px 10px; 
    border-radius: 5px; 
  }

  .nav-link:hover {
    background-color: #2a2d36;
    color: #d1d4dc; 
  }
</style>
