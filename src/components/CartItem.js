import React from 'react'
import { useDispatch } from 'react-redux'
import { getPrecisionNumber, getPriceAfterDiscount } from '../lib/utility';
import { decreaseQuantityFromCart, increaseQuantityInCart, RemoveFromCart } from '../redux/Actions/action';

function CartItem(props) {
  const dispatch=useDispatch();
  function decreaseItemHandler(product_id){
    dispatch(decreaseQuantityFromCart(product_id))
  }
  function increaseItemHandler(product_id){
    dispatch(increaseQuantityInCart(product_id));
  }
  function removeItemHandler(product_id){
    dispatch(RemoveFromCart(product_id));
  }
  return (
    <tr>
            <td className="align-middle">
              <img src={props.cartItem.product.thumbnail} alt="" style={{ width: 50 }} />{" "}
              {props.cartItem.product.title}
            </td>
            <td className="align-middle">${getPriceAfterDiscount(props.cartItem.product.price,props.cartItem.product.discountPercentage)}</td>
            <td className="align-middle">
              <div
                className="input-group quantity mx-auto"
                style={{ width: 100 }}
              >
                <div className="input-group-btn">
                  <button onClick={()=>decreaseItemHandler(props.cartItem.product.id)} className="btn btn-sm btn-primary btn-minus">
                    <i className="fa fa-minus" />
                  </button>
                </div>
                <span
                  // type="text"
                  // className="form-control form-control-sm bg-secondary border-0 text-center"
                  
                >{props.cartItem.quantity}</span>
                <div className="input-group-btn">
                  <button onClick={()=>increaseItemHandler(props.cartItem.product.id)} className="btn btn-sm btn-primary btn-plus">
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </td>
            <td className="align-middle">${getPrecisionNumber((getPriceAfterDiscount(props.cartItem.product.price,props.cartItem.product.discountPercentage)*props.cartItem.quantity),2)}</td>
            <td className="align-middle">
              <button onClick={()=>removeItemHandler(props.cartItem.product.id)} className="btn btn-sm btn-danger">
                <i className="fa fa-times" />
              </button>
            </td>
          </tr>
  )
}

export default CartItem