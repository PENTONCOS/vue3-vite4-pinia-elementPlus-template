import { defineConfig, loadEnv } from 'vite';
import viteDevelopmentConfig from './.vite.development.config.js'
import viteProductionConfig from './.vite.production.config.js'


export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      ...viteDevelopmentConfig,
    }
  } else if (command === 'build') {
    return {
      ...viteProductionConfig,
    }
  }
});
