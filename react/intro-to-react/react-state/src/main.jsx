import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AnimeList from './components/AnimeList.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimeList />
  </StrictMode>,
)
