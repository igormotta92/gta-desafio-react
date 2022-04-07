import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/Home';


function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {
          // Exemplos Rotas
          /* <Route path="/movies" element={<MoviesPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/contacts" element={<ContactsPage />} /> */
        }
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
