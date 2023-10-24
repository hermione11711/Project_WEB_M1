import { createRouter, createWebHistory } from 'vue-router';
import CryptoPage from '../views/CryptoPage.vue';
import HomePage from '../views/HomePage.vue';
import MarketAnalysisTools from '../views/MarketAnalysisTool.vue';
import Beginner from '../views/BeginnersGuide.vue';
import { useAuth0 } from '@auth0/auth0-vue';
import AboutUs from '../views/AboutUsPage.vue'

const routes = [
  {
    path: '/crypto',
    name: 'Crypto',
    component: CryptoPage,
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/market-analysis-tool',
    name: 'MarketAnalysisTool',
    component: MarketAnalysisTools,
    beforeEnter: (to, from, next) => {
      const { isAuthenticated } = useAuth0();
      
      if (isAuthenticated.value) {
        next(); 
      } else {
        next({ name: 'Home' }); 
      }
    }
  },
  {
    path: '/Beginner',
    name: 'Beginner',
    component: Beginner,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
