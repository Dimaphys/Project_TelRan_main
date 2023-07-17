import AllProductsPage from '../../pages/AllProductsPage';
import AllSalesPage from '../../pages/AllSalesPage';
import CartPage from '../../pages/CartPage';
import CategoryPage from '../../pages/CategoriesPage';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import ProductDescriptionPage from '../../pages/ProductDescriptionPage';
import Layout from '../Layout';
import Container from '../UI/Container';
import './App.css';
import { Route, Routes } from 'react-router-dom';





function App() {
  
  return (
    <Container>
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='/products/:id' element={<ProductDescriptionPage />} />
            <Route path='/categories' element={<CategoryPage/>} />
            <Route path='/products' element={<AllProductsPage />} />
            <Route path='/sales' element={<AllSalesPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/*' element={<NotFoundPage />} /> 
          </Route>
        </Routes> 
      
      </div>
    </Container>
  );
}

export default App;
