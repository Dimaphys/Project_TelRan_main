import AllProductsPage from '../../pages/AllProductsPage';
import AllSalesPage from '../../pages/AllSalesPage';
import CartPage from '../../pages/CartPage';
import CategoryPage from '../../pages/CategoriesPage';
import MainPage from '../../pages/MainPage';
import Layout from '../Layout';
import Container from '../UI/Container';
import './App.css';
import { Route, Routes } from 'react-router-dom';



// определяем локалхост

export const host_link = "http://localhost:3333"

function App() {
  
  return (
    <Container>
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='/categories' element={<CategoryPage/>} />
            <Route path='/products' element={<AllProductsPage />} />
            <Route path='/sales' element={<AllSalesPage />} />
            <Route path='/cart' element={<CartPage />} /> 
          </Route>
        </Routes> 
      
      </div>
    </Container>
  );
}

export default App;
