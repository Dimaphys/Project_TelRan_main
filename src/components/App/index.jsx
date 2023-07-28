import AllProductsPage from '../../pages/AllProductsPage';
import CartPage from '../../pages/CartPage';
import CategoryPage from '../../pages/CategoriesPage';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import ProductDescriptionPage from '../../pages/ProductDescriptionPage';
import ProductsByCategoryPage from '../../pages/ProductsByCategoryPage';
import ProductsWithSalePage from '../../pages/ProductsWithSalePage';
import Layout from '../Layout';
import Container from '../UI/Container';
import './App.css';
import { Route, Routes } from 'react-router-dom';





function App() {
  
  return (
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='/products/:id' element={<ProductDescriptionPage />} />
            <Route path='/categories' element={<CategoryPage/>} />
            <Route path='/products' element={<AllProductsPage />} />
            <Route path='/sales' element={<ProductsWithSalePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/*' element={<NotFoundPage />} /> 
            <Route path='/categories/:category' element={<ProductsByCategoryPage />} />
          </Route>
        </Routes> 
      
      </div>

  );
}

export default App;
