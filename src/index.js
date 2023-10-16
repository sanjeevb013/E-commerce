import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart';
import PageNotFound from './components/PageNotFound';
import ProductsShopPage from './components/ProductsShopPage';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Help from './components/Help';
import Faq from './components/Faq';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/Cart' element={<ShoppingCart/>} />
      <Route path='/Checkout' element={<Checkout/>} />
      <Route path='/ContactUs' element={<ContactUs/>} />
      <Route path='/AboutUs' element={<AboutUs/>} />
      <Route path='/SignIn' element={<SignIn/>} />
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/Help' element={<Help/>} />
      <Route path='/FAQ' element={<Faq/>} />
      <Route path='/Products' element={<ProductsShopPage/>} />
      <Route path='/Products/ProductDetails' element={<ProductDetails/>} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
    </Provider>
   
  
);

