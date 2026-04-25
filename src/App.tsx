import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Enigma1 from './pages/Enigma1'
import Enigma2 from './pages/Enigma2'
import Enigma3 from './pages/Enigma3'
import Enigma4 from './pages/Enigma4'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/enigma-1" element={<Enigma1 />} />
          <Route path="/enigma-2" element={<Enigma2 />} />
          <Route path="/enigma-3" element={<Enigma3 />} />
          <Route path="/enigma-4/:answer?" element={<Enigma4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
