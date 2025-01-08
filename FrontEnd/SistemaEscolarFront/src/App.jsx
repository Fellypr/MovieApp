
import './App.css'
import { Outlet } from 'react-router-dom'

import { AuthProvider } from './components/context';
function App() {
  //Todos que estiver dentro do App tem acesso ao AuthProvider ou seja ao contexto e seu valores

  return (
    <>
    
      <AuthProvider>
      <Outlet/>
      </AuthProvider>
      

    </>
  )
}

export default App;
