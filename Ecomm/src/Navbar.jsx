import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const selectObj = useSelector((store) => store.CartReducer);
  return (
    <div>
      <nav class="navbar navbar-light bg-primary ">
        <div class="container-fluid">
          <Link class="navbar-brand fs-2" to="#">
            Navbar
          </Link>

          <Link class="nav-link active fs-2" aria-current="page" to="/">
            Home
          </Link>

          <Link class="nav-link active fs-2" aria-current="page" to="/additem">
            AddItem
          </Link>

          <Link class="navbar-brand fs-2" to="/cart">
            Cart : {selectObj.cartItem.length}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
