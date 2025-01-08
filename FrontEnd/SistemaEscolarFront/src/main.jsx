import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Route,Routes} from "react-router-dom"

import Registro from './pages/Registro/Registro.jsx'
import Container from './pages/Container/Container.jsx'
import HomeLogin from './pages/HomeLogin/HomeLogin.jsx'
import Details from './pages/details/details.jsx'
import Search from './pages/Search/search.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<App />}>
              <Route path="/" element={<HomeLogin />} />
              <Route path="/Details/:id" element={< Details/>} />
              <Route path="/Registro" element={<Registro />} />
              <Route path='/container' element={<Container/>}/>
              <Route path="/search" element={<Search/>} />
              
          </Route>
        </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
