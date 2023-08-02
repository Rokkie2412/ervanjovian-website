import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './Pages/Main/App'
import Article from './Pages/Article/Article'
import Jumper from './Pages/Jumper/Jumper'
import Ai from './Pages/AI/AI'


const route = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/articles' element={<Article/>}/>
        <Route path='/article/:id/jumper/:uuid' element={<Jumper/>}/>
        <Route path='/article/:id/ai-ancaman-atau-perkembangan/:uuid' element={<Ai/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default route