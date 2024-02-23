import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Accesoiries from './pages/Accesoiries';
import Support from './pages/Support';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Login from './components/login/Login'
import { AuthProvider } from './components/auth/AuthProvider';
import {RequireAuth} from './components/auth/RequireAuth'
import Cart from './components/cart/Cart';




function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/accesoiries" element={<Accesoiries />} />
        <Route path='/support' element={<Support />} />
        <Route path='/cart' element={
          <RequireAuth>
            <Cart />
          </RequireAuth>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
library.add(fas)