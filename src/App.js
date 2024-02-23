import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Accesoiries from './pages/Accesoiries';
import Support from './pages/Support';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Cart from './components/cart/Cart';



function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/accesoiries" element={<Accesoiries />} />
        <Route path='/support' element={<Support />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
  );
}

export default App;
library.add(fas)