import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Calculator } from './pages/Calculator';


function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
