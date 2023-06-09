import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HashRouter } from "react-router-dom"
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
      <App />
  </HashRouter>
)
