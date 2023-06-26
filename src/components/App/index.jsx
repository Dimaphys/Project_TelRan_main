import Footer from '../Footer';
import Layout from '../Layout';
import NavMenu from '../NavMenu';
import './App.css';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<ProductsPage />} />
          <Route path='/product/:id' element={<ProductDescriptionPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/categories/:category'/> */}
        </Route>
      </Routes> 
     
    </div>
  );
}

export default App;
