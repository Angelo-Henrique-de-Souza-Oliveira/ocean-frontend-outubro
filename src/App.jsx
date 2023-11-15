import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Card/Home/Home.jsx';
import ReadById from './components/Card/ReadById/ReadById.jsx'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/:id" element={<ReadById />} />
      </Routes>
    </BrowserRouter>
  )
}