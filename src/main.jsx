import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext/ThemeProvider.jsx';
import { UserProvider } from './context/UserContext/UserProvider.jsx';
import { CartProvider } from './context/CartContext/CartProvider.jsx';
import { FavoriteProvider } from './context/FavoriteContext/FavoriteProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <CartProvider>
            <FavoriteProvider>
              < App />
            </FavoriteProvider>
          </CartProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
