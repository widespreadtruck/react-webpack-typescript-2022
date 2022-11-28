import React from 'react'
import { createRoot } from 'react-dom/client'
import Application from './components/Application'
import { BrowserRouter } from 'react-router-dom'

// Say something
console.log('[ERWT] : Renderer execution started')

// Application to Render
const app = (
  <BrowserRouter>
    <Application />
  </BrowserRouter>
)

// Render application in DOM
createRoot(document.getElementById('app')).render(app)
