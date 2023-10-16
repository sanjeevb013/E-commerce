import {
  FETCH_FAILED,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY_IN_CART,
  DECREASE_QUANTITY_FROM_CART,
  FETCH_REQUEST_CATEGORY,
  FETCH_SUCCESS_CATEGORY,
  FETCH_FAILED_CATEGORY,
  LOAD_FEATURED_PRODUCT,
  SELECT_CATEGORY,
  FILTER_CATEGORY_PRICE_PRODUCT,
  SELECT_PRICE
} from "../Constants/constant";
import axios from "axios";
import { getPriceRangeArray } from "../../lib/utility";
const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const successRequest = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
};
const failedRequest = (error) => {
  return { type: FETCH_FAILED, payload: error };
};
const fetchRequestCategory = () => {
  return { type: FETCH_REQUEST_CATEGORY };
};
const successRequestCategory = (data) => {
  return { type: FETCH_SUCCESS_CATEGORY, payload: data };
};
const failedRequestCategory = (error) => {
  return { type: FETCH_FAILED_CATEGORY, payload: error };
};

export const fetchProduct = () => {
  return (dispatch) => {
    dispatch(fetchRequest());    
    axios.get("https://dummyjson.com/products/?limit=100")
      .then((response) => {
        const products = response.data.products;
        console.log(getPriceRangeArray(products));
        dispatch(successRequest(products));
        dispatch(loadFeaturedProducts('all'));        
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(failedRequest(errorMsg));
       
      });
  };
};
export const fetchCategory = () => {
  return (dispatch) => {
    dispatch(fetchRequestCategory());
    
    axios.get("https://dummyjson.com/products/categories")
      .then((response) => {
        const categories = response.data;
        dispatch(successRequestCategory(categories));
        
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(failedRequestCategory(errorMsg));
       
      });
  };
};

// Action Creater for Cart.

export const addToCart=(product_id)=>{
  return {type:ADD_TO_CART,payload:product_id}
}
export  const RemoveFromCart=(product_id)=>{
  return {type:REMOVE_FROM_CART,payload:product_id}
}
export const increaseQuantityInCart=(product_id)=>{
  return {type:INCREASE_QUANTITY_IN_CART,payload:product_id}
}
export const decreaseQuantityFromCart=(product_id)=>{
  return {type:DECREASE_QUANTITY_FROM_CART,payload:product_id}
}
/// Action for Load Product
export const loadFeaturedProducts=(category)=>{
  return {type:LOAD_FEATURED_PRODUCT,payload:category}
}
////
export const selectCategory=(cat_name,checked)=>{
  return {type:SELECT_CATEGORY,payload:cat_name,checked:checked};
};
export const selectPrice=(price_range,checked)=>{
  return {type:SELECT_PRICE,payload:price_range,checked:checked};
};
export const filterByCategoryAndPrice=(arr_cat,arr_price)=>{
  return {type:FILTER_CATEGORY_PRICE_PRODUCT,payload:{category:arr_cat,price:arr_price}};
}
export default fetchProduct;
