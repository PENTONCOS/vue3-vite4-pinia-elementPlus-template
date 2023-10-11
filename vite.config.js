import { defineConfig, loadEnv } from 'vite';
import viteDevelopmentConfig from './.vite.development.config.js';
import viteProductionConfig from './.vite.production.config.js';
import viteTestConfig from './.vite.test.config.js';

const strategies = {
  development: viteDevelopmentConfig,
  production: viteProductionConfig,
  test: viteTestConfig,
};

export default defineConfig(({ command, mode }) => {
  return {
    base: loadEnv(mode, process.cwd()).VITE_BASE_HistoryBaseURL,
    ...strategies[mode],
  };
});
