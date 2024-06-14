import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const cartobj = useSelector((store) => store.CartReducer);

  const tablebody = cartobj.cartItem.map((item) => {
    return (
      <tr>
        <td>{item.itemName}</td>
        <td>{item.itemPrice}</td>
        <button
          onClick={() => {
            dispatch({ type: "Delete_Item_From_Cart", payload: item });
          }}
          style={{ width: "100%" }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </tr>
    );
  });

  return (
    <div
      className="row justify-content-center"
      style={{ padding: " 50px 100px" }}
    >
      <table className="table table-info table-bordered">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{tablebody}</tbody>
      </table>
    </div>
  );
};

export default Cart;
