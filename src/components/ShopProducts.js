import React from "react";
import SingleProductFeatured from "./SingleProductFeatured";
import fetchProduct from '../redux/Actions/action';
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import store from '../redux/store'
import SingleProductShop from "./SingleProductShop";
function ShopProducts() {
  
  const loading=useSelector((state)=>state.loading);
  const errMessage=useSelector((state)=>state.error);
  const data=useSelector((state)=>state.filter_by_cat_price_product);
  const all_data=useSelector((state)=>state.products);
  const dispatch=useDispatch();
  useEffect(()=>{
    if(all_data.length==0)
      dispatch(fetchProduct());
  },[])
  console.log(data.length);
  return loading ? (<h2>Loading.....</h2>): errMessage ? (<h2>{errMessage}</h2>) : (
    <div className="container-fluid pt-5 pb-3">
      {/* <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2> */}
      <div className="row px-xl-5">
        {
        data && data.map((product,i)=>{ if(i<9) { return <SingleProductShop key={"sin"+i} product={product}/>}})
        } 
         
      </div>
    </div>
  );
}

export default ShopProducts;
