import { createSSRApp } from 'vue'
import Pinia from '@/stores'
import App from './App.vue'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia)
  return {
    app,
    Pinia,
  }
}
