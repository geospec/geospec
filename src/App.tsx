import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import NotFound from './pages/NotFound';
import ScrollToHash from './components/ScrollToHash';

/**
 * Top-level router. Three routes:
 *   /                          → Home page
 *   /services/:slug            → Service detail page
 *   *                          → 404
 */
export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
