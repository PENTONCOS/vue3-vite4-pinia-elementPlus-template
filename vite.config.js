import { defineConfig, loadEnv } from 'vite';
import viteDevelopmentConfig from './.vite.development.config.js';
import viteProductionConfig from './.vite.production.config.js';
import viteTestConfig from './.vite.test.config.js';

export default defineConfig(({ command, mode }) => {
  let config = {
    base: loadEnv(mode, process.cwd()).VITE_BASE_HistoryBaseURL,
  };

  return {
    ...config,
    ...(mode === 'development' ? viteDevelopmentConfig : null),
    ...(mode === 'production' ? viteProductionConfig : null),
    ...(mode === 'test' ? viteTestConfig : null),
  };
});
