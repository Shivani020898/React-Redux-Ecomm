import Item from "../Item";

const initialData = {
  cartItem: [],
};

function CartReducer(state = initialData, action) {
  switch (action.type) {
    case "Add_Item_To_Cart":
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    case "Delete_Item_From_Cart":
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (item) => item.itemName != action.payload.itemName
        ),
      };
  }
  return state;
}

export default CartReducer;
