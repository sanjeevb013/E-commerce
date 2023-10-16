import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import SingleCategory from "./SingleCategory";
import { fetchCategory } from "../redux/Actions/action";
function Categories() {
  const loading = useSelector((state) => state.loading_category);
  const errMessage = useSelector((state) => state.error_category);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Use Effect");
    dispatch(fetchCategory());
  }, []);

  return loading ? (
    <h2>Loading.....</h2>
  ) : errMessage ? (
    <h2>{errMessage}</h2>
  ) : (
    <>
      <div className="col-lg-3 d-none d-lg-block">
        <a
          className="btn d-flex align-items-center justify-content-between bg-primary w-100"
          data-toggle="collapse"
          href="#navbar-vertical"
          style={{ height: 65, padding: "0 30px" }}
        >
          <h6 className="text-dark m-0">
            <i className="fa fa-bars mr-2" />
            Categories
          </h6>
          <i className="fa fa-angle-down text-dark" />
        </a>
        <nav
          className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
          id="navbar-vertical"
          style={{ width: "calc(100% - 30px)", zIndex: 999 }}
        >
          <div className="navbar-nav w-100">
            {categories.map((category, index) => {
              return (
                <SingleCategory
                  key={"cat" + index}
                  category={category}                  
                />
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Categories;
