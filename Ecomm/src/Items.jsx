import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

const Items = () => {
  const itemsObj = useSelector((store) => store.ItemsReducer);
  const ItemsList = itemsObj.items;

  const itemsData = ItemsList.map((i) => {
    return (
      <div className="col-md-4">
        {/* The col-md-4 class indicates that the element should take up 4 out of 12 column */}
        <Item i={i} />
      </div>
    );
  });
  return (
    <div className="container">
      {/* <h1>Total Items : {itemsObj.items.length}</h1> */}

      <div className="row">{itemsData}</div>
    </div>
  );
};
export default Items;
