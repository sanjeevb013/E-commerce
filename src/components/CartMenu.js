import React from 'react'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
function CartMenu() {
  const total_count=useSelector((state)=>state.total_count);
  return (
    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <a href="" className="btn px-0">
                    <i className="fas fa-heart text-primary" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      0
                    </span>
                  </a>
                  <NavLink to="/Cart" className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary" />
                    
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      {total_count}
                    </span>
                    
                  </NavLink>
                </div>
  )
}

export default CartMenu