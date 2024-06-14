import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const dispatch = useDispatch();


    const handleAddItem = () => {
      const newItem = {
        itemName,
        itemImage,
        itemPrice: parseFloat(itemPrice) // Ensure price is a number
      };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
  
      // Clear inputs after adding item
      setItemName('');
      setItemImage('');
      setItemPrice('');
    };
  

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <label htmlFor="itemName" className="form-label">
          Item Name
        </label>
        <input
          type="text"
          className="form-control"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="itemImage" className="form-label">
          Item Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="itemImage"
          value={itemImage}
          onChange={(e) => setItemImage(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="itemPrice" className="form-label">
          Item Price
        </label>
        <input
          type="number"
          className="form-control"
          id="itemPrice"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddItem}>
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
