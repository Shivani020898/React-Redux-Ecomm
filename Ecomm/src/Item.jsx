import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
const Item = ({ i }) => {
  const dispatch = useDispatch()
  function AddToCart(){
      dispatch({type:'Add_Item_To_Cart',payload:i})
   
  }
  return (
    <div className="shadow p-3 mb-5 bg-body rounded">
      <h1>{i.itemName}</h1>
      <img src={i.itemImage} className="img-fluid " />
      <h1>{i.itemPrice}</h1>
      <button onClick={AddToCart} className="btn btn-primary">AddToCart</button>
    </div>
  );
};

export default Item;
