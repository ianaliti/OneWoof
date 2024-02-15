import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Accesoiries from './pages/Accesoiries';
import Support from './pages/Support';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/accesoiries" element={<Accesoiries />} />
      <Route path='/support' element={<Support />} />
    </Routes>
  );
}

export default App;
