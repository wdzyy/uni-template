import { createSSRApp } from 'vue'
import App from './App.vue'
import Pinia from '@/stores'
import './styles/main.css'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia)
  return {
    app,
    Pinia,
  }
}
