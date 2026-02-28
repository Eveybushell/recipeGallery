import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RecipeGallery from './RecipeGallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeGallery />
  </StrictMode>,
)
