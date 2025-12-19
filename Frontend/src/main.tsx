import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { router } from './router'

const rootElement = document.getElementById('root');

const app = (
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);

// Check if the root has child nodes (meaning pre-rendered HTML exists)
if (rootElement && rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement!).render(app);
}