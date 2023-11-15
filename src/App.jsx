import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Card/Home/Home.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}