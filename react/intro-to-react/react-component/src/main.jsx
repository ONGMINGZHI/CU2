import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JsxComponent from'./component-lesson/JsxComponent.jsx'
import App from './App.jsx'
import ShowBasketballTeam from './ShowBasketballTeam.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<ShowBasketballTeam/>
  </StrictMode>,
)
