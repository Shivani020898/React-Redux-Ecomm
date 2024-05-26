import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const selectObj = useSelector((store) => store.CartReducer);
  return (
    <div>
      <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>

          <a class="nav-link active" aria-current="page" href="#">
            Home
          </a>

          <a class="nav-link active" aria-current="page" href="#">
            AddItem
          </a>

          <a class="navbar-brand" href="#">
            Cart : {selectObj.cartItem.length}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
