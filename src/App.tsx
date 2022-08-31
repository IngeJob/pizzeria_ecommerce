import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='*' element={<h1>Página no encontrada</h1>} />
      </Routes>      
    </div>
  )
}

export default App
