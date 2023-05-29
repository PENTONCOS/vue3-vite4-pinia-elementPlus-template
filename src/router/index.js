import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_HistoryBaseURL),
  routes,
});

export default router;
