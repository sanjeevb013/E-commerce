import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadFeaturedProducts } from "../redux/Actions/action";

function SingleCategory(props) {
  const dispatch=useDispatch();
  function categoryClickHandler(catename){
    dispatch(loadFeaturedProducts(catename));
  }
  if (props.selected == "1") {
    return <div data-toggle="collapse"
    data-target="#navbar-vertical" onClick={()=>categoryClickHandler(props.category)}   className="nav-item nav-link">{props.category}</div>;
  } else {
    return <div data-toggle="collapse"
    data-target="#navbar-vertical" onClick={()=>categoryClickHandler(props.category)}  className="nav-item nav-link">{props.category}</div>;
  }
}

export default SingleCategory;
