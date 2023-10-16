import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Featured from './components/Featured';
import Categories from './components/Categories';
import Offer from './components/Offer';
import RecentProducts from './components/RecentProducts';
import Vendor from './components/Vendor';
import Footer from './components/Footer';
import FeaturedProducts from './components/FeaturedProducts';

import {Provider} from 'react-redux'

import store from './redux/store';
import MainPage from './components/MainPage';
function App() {
  
  document.title="Home";

  return  (    
    
      <>
      {/* <MainPage/> */}
    <Topbar/>
    <Navbar/>
    {/* <Carousel/> */}
    <Featured/>
    <FeaturedProducts/>
    <Offer/>
    <RecentProducts/>
    <Vendor/>
    <Footer/>
    </>
    
  );
}


export default App;
