import {
  addProductInCart,
  decreaseQuantity,
  getFilterByCatAndPrice,
  getProductByCategory,
  getProductByProductId,
  getTotalDiscountOfCart,
  getTotalPriceOfCart,
  increaseQuantity,
  removeProductfromCart,
} from "../../lib/utility";
//import { increaseQuantityInCart,de } from "../Actions/action";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY_FROM_CART,
  FETCH_FAILED,
  FETCH_FAILED_CATEGORY,
  FETCH_REQUEST,
  FETCH_REQUEST_CATEGORY,
  FETCH_SUCCESS,
  FETCH_SUCCESS_CATEGORY,
  FILTER_CATEGORY_PRICE_PRODUCT,
  INCREASE_QUANTITY_IN_CART,
  LOAD_FEATURED_PRODUCT,
  REMOVE_FROM_CART,
  SELECT_CATEGORY,
  SELECT_PRICE,
} from "../Constants/constant";

const initialState = {
  loading: true,
  products: [],
  fetured_products: [],
  error: "",
  loading_category: true,
  categories: [],
  error_category: "",
  
  cartitems: [],
  total_count: 0,
  total_amount: 0,
  total_discount: 0,
  selected_category:[],
  selected_price_range:[],
  filter_by_cat_price_product:[],
  all_category_select:1,
  all_price_select:1
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //Api Calling State Change
    case FETCH_REQUEST:
      return { ...state, loading: true };

    case FETCH_SUCCESS:
      return { ...state, loading: false, products: action.payload, filter_by_cat_price_product:action.payload};

    case FETCH_FAILED:
      return { ...state, loading: false, error: action.payload };

      case FETCH_REQUEST_CATEGORY:
      return { ...state, loading_category: true };

    case FETCH_SUCCESS_CATEGORY:
      return { ...state, loading_category: false, categories: action.payload};

    case FETCH_FAILED_CATEGORY:
      return { ...state, loading_category: false, error_category: [...action.payload] };
    //// Cart related state Change
    case ADD_TO_CART:
      var product = getProductByProductId(state.products,action.payload);
      addProductInCart(state.cartitems, product);
      var total_count=state.cartitems.length;
      var total_amount = getTotalPriceOfCart(state.cartitems);
      var total_discount = getTotalDiscountOfCart(state.cartitems);
      return {
        ...state,
        total_amount: total_amount,
        total_discount: total_discount,
        total_count:total_count
      };
    case REMOVE_FROM_CART:
      removeProductfromCart(state.cartitems, action.payload);
      var total_count = state.cartitems.length;
      var total_amount = getTotalPriceOfCart(state.cartitems);
      var total_discount = getTotalDiscountOfCart(state.cartitems);
      return {
        ...state,
        total_amount: total_amount,
        total_discount: total_discount,
        total_count:total_count
      };
    case INCREASE_QUANTITY_IN_CART:
    increaseQuantity(state.cartitems, action.payload);
    var total_count = state.cartitems.length;
    var total_amount = getTotalPriceOfCart(state.cartitems);
    var total_discount = getTotalDiscountOfCart(state.cartitems);
    return {
        ...state,
        total_amount: total_amount,
        total_discount: total_discount,
        total_count:total_count
    };
    case DECREASE_QUANTITY_FROM_CART:
      decreaseQuantity(state.cartitems, action.payload);
      var total_count = state.cartitems.length;
      var total_amount = getTotalPriceOfCart(state.cartitems);
      var total_discount = getTotalDiscountOfCart(state.cartitems);
      return {
        ...state,
        total_amount: total_amount,
        total_discount: total_discount,
        total_count:total_count
      };
      ///// Load Product
      case LOAD_FEATURED_PRODUCT:
        var f_products=getProductByCategory(state.products,action.payload);
        return {
          ...state,
          fetured_products:f_products
        };
      case SELECT_CATEGORY :
      var cat_arr=state.selected_category;
      if(action.payload=='all'){
        if(action.cheched)
          cat_arr.length=0;
        //cat_arr.push('all');
      }
      else{
        if(action.cheched){
          if(cat_arr.filter(cat_name=>cat_name==action.payload).length==0){
            cat_arr.push(action.payload);
          }
        }
        else{
          for(let i =0;i<cat_arr.length;i++){
            if(cat_arr[i]==action.payload){
              cat_arr.splice(i,1);
              break;
            }
          }
        }
        
      } 
      var filter_pro_arr=getFilterByCatAndPrice(state.products, {price:state.selected_price_range,category:cat_arr});  
      return {
          ...state,selected_category:cat_arr,filter_by_cat_price_product:filter_pro_arr
        };
      case SELECT_PRICE :
        var price_arr=state.selected_price_range;
        if((action.payload.start==-1) && (action.payload.end==-1)){
          if(action.cheched)
          {
            price_arr.length=0;
          }            
          else{
              
            }
          //price_arr.push({start:-1,end:-1});
        }
        else{
          if(price_arr.filter(price_range=>((price_range.start==action.payload.start)&&(price_range.end==action.payload.end))).length==0){
            price_arr.push(action.payload);
          }
        } 
        var filter_pro_arr=getFilterByCatAndPrice(state.products, {price:price_arr,category:state.selected_category}); 
        return {
            ...state,selected_price_range:price_arr,filter_by_cat_price_product:filter_pro_arr
          };
    case FILTER_CATEGORY_PRICE_PRODUCT :
      var filter_pro_arr=getFilterByCatAndPrice(state.products, action.payload);
      return {...state,filter_by_cat_price_product:filter_pro_arr};
    default :
    return state;
  }
};

export default reducer;
