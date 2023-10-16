import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import ProductFilter from './ProductFilter'
import ShopProducts from './ShopProducts'
import Topbar from './Topbar'

function ProductsShopPage() {
  document.title="Product"
  return (
    <>
    <Topbar/>
    <Navbar/>
    {/* <Carousel/> */}
    
    <div className="container-fluid">
        <div className="row px-xl-5">
        <div className="col-lg-3 col-md-4">
        <ProductFilter filter="Price"/>
        <ProductFilter filter="Category"/>
        {/* <ProductFilter/>
        <ProductFilter/> */}
        </div>
        
        <div className="col-lg-9 col-md-8">
                <div className="row pb-3">
                    <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div>
                                <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                                <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
                            </div>
                            <div className="ml-2">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Latest</a>
                                        <a className="dropdown-item" href="#">Popularity</a>
                                        <a className="dropdown-item" href="#">Best Rating</a>
                                    </div>
                                </div>
                                <div className="btn-group ml-2">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">10</a>
                                        <a className="dropdown-item" href="#">20</a>
                                        <a className="dropdown-item" href="#">30</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        <ShopProducts/>
        <div className="col-12">
  <nav>
    <ul className="pagination justify-content-center">
      <li className="page-item disabled">
        <a className="page-link" href="#">
          Previous
        </a>
      </li>
      <li className="page-item active">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          Next
        </a>
      </li>
    </ul>
  </nav>
</div>

        </div>
        
        </div>
        </div>
    </div>
    
   <Footer/>

    </>
  )
}
export default ProductsShopPage