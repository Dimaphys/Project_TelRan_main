import AllProductsPage from '../../pages/AllProductsPage';
import AllSalesPage from '../../pages/AllSalesPage';
import CartPage from '../../pages/CartPage';
import CategoryPage from '../../pages/CategoryPage';
import MainPage from '../../pages/MainPage';
import Layout from '../Layout';
import './App.css';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/products' element={<AllProductsPage />} />
          <Route path='/sales' element={<AllSalesPage />} />
          <Route path='/cart' element={<CartPage />} /> 
        </Route>
      </Routes> 
     
    </div>
  );
}

export default App;
