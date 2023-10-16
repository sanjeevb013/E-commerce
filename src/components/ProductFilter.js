import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryArray, getPriceRangeArray } from "../lib/utility";
import { selectCategory, selectPrice } from "../redux/Actions/action";

function ProductFilter(props) {
  const allProducts = useSelector((state) => state.products);
  const allCategory = useSelector((state) => state.categories);
  const all_price_select = useSelector((state) => state.all_price_select);
  const all_category_select = useSelector((state) => state.all_category_select);
  const dispatch=useDispatch();
  function checkCatClickHandler(catname,e){
    dispatch(selectCategory(catname,e.currentTarget.checked));
  }
  function checkPriceRangeClickHandler(start,end,e){
    console.log(e.currentTarget.checked)
    dispatch(selectPrice({start:start,end:end},e.currentTarget.checked));
  }
  if (props.filter == "Price") {
    return (
      <>
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Filter by price</span>
        </h5>
        <div className="bg-light p-4 mb-30">
          <form>
            <div  className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input onClick={(e)=>checkPriceRangeClickHandler(-1,-1,e)}
                type="checkbox"
                className="custom-control-input"
                defaultChecked={all_price_select}
                id="price-all"
              />
              <label className="custom-control-label" htmlFor="price-all">
                All Price
              </label>
              <span className="badge border font-weight-normal">
                {allProducts.length}
              </span>
            </div>
            {getPriceRangeArray(allProducts).map((p, i) => {
              return (
                <div 
                  key={i}
                  className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
                >
                  <input
                    onClick={(e)=>checkPriceRangeClickHandler(p.start,p.end,e)}
                    type="checkbox"
                    className="custom-control-input"
                    id={"price-"+i}
                  />
                  <label className="custom-control-label" htmlFor={"price-"+i}>
                    ${p.start} - ${p.end}
                  </label>
                  <span className="badge border font-weight-normal">
                    {p.count}
                  </span>
                </div>
              );
            })}
          </form>
        </div>
      </>
    );
  } else if (props.filter == "Category") {
    return (
      <>
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Filter by Category</span>
        </h5>
        <div className="bg-light p-4 mb-30">
          <form>
            <div  className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                onClick={(e)=>checkCatClickHandler('all',e)}
                type="checkbox"
                className="custom-control-input"
                defaultChecked={all_category_select}
                id="cat-all"
              />
              <label className="custom-control-label" htmlFor="cat-all">
                All Category
              </label>
              <span className="badge border font-weight-normal">
                {allProducts.length}
              </span>
            </div>
            {getCategoryArray(allProducts,allCategory).map((c, i) => {
              return (
                <div  key={i} className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input 
                    onClick={(e)=>checkCatClickHandler(c.cat_name,e)}
                    type="checkbox"
                    className="custom-control-input"
                    id={"cat"+i}
                    
                  />
                  <label className="custom-control-label" htmlFor={"cat"+i}>
                    {c.cat_name}
                  </label>
                  <span className="badge border font-weight-normal">{c.count}</span>
                </div>
              );
            })}
          </form>
        </div>
      </>
    );
  }
}

export default ProductFilter;
