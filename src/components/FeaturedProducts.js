import React from "react";
import SingleProductFeatured from "./SingleProductFeatured";
import fetchProduct from '../redux/Actions/action';
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import store from '../redux/store'
function FeaturedProducts() {
  
  const loading=useSelector((state)=>state.loading);
  const errMessage=useSelector((state)=>state.error);
  const data=useSelector((state)=>state.fetured_products);
  const dispatch=useDispatch();
  useEffect(()=>{
    console.log('Use Effect');
    dispatch(fetchProduct());
  },[])
  console.log(data.length);
  return loading ? (<h2>Loading.....</h2>): errMessage ? (<h2>{errMessage}</h2>) : (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
        {
        data && data.map((product,i)=>{ if(i<8) { return <SingleProductFeatured key={"sin"+i} product={product}/>}})
        } 
         

      
      
          
        
      
      </div>
    </div>
  );
}

export default FeaturedProducts;
