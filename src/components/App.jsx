import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';
import Header from './Header/Header';
import { Toaster } from 'react-hot-toast';
import { ContainerStyled } from './App.styled';

function App() {
  return (
    <ContainerStyled>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster position="top-right" />
    </ContainerStyled>
  );
}

export default App;