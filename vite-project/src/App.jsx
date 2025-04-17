import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import './styles/App.css';
import {Route, Routes} from 'react-router-dom'

function App() {
  
  return (

    <Routes>
      <Route index element={<IndexPage />} />
      <Route path='/login'  element={<LoginPage/>} />
    </Routes>
    
  )
}

export default App
