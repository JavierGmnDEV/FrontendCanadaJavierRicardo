
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ecommerce from './pages/Ecommerce';
import ProductDetailPage from './pages/ProductDetailPage';
import Confirm from './pages/Confirm'; // Asegúrate de que Confirm esté correctamente importado
import 'leaflet/dist/leaflet.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ecommerce />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/solicitudes" element={<div>Solicitudes</div>} /> {/* Ruta temporal para solicitudes */}
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </Router>
  );
}

export default App;