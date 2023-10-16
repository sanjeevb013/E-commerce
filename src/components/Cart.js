import React from 'react'
import { useSelector } from 'react-redux'
import { getPrecisionNumber } from '../lib/utility';
import CartItem from './CartItem';

function Cart() {
  const cartItems=useSelector((state)=>state.cartitems);
  const total_amount=useSelector((state)=>state.total_amount);
  return (
    <div className="container-fluid">
  <div className="row px-xl-5">
    <div className="col-lg-8 table-responsive mb-5">
      <table className="table table-light table-borderless table-hover text-center mb-0">
        <thead className="thead-dark">
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          {
            cartItems.map((item,index)=><CartItem key={"cart"+index} cartItem={item}/>)
          }
        </tbody>
      </table>
    </div>
    <div className="col-lg-4">
      <form className="mb-30" action="">
        <div className="input-group">
          <input
            type="text"
            className="form-control border-0 p-4"
            placeholder="Coupon Code"
          />
          <div className="input-group-append">
            <button className="btn btn-primary">Apply Coupon</button>
          </div>
        </div>
      </form>
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Cart Summary</span>
      </h5>
      <div className="bg-light p-30 mb-5">
        <div className="border-bottom pb-2">
          <div className="d-flex justify-content-between mb-3">
            <h6>Subtotal</h6>
            <h6>${getPrecisionNumber( total_amount,2)}</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-medium">Shipping</h6>
            <h6 className="font-weight-medium">
             {(cartItems.length==0) ? ('$0') : ('$10')}</h6>
          </div>
        </div>
        <div className="pt-2">
          <div className="d-flex justify-content-between mt-2">
            <h5>Total</h5>
            <h5>${getPrecisionNumber( (total_amount+((cartItems.length==0) ? 0 : 10)),2)}</h5>
          </div>
          <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Cart