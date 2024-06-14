const initialData = {
  items: [
    {
      itemName: "realme NARZO 70 5G（Ice Blue,6GB RAM, 128GB",
      itemImage: "https://m.media-amazon.com/images/I/712qzWNmjFL._SL1500_.jpg",
      itemPrice: "15,999",
    },
    {
      itemName: "realme NARZO 70 5G（Ice Blue,6GB RAM, 128GB",
      itemImage: "https://m.media-amazon.com/images/I/712qzWNmjFL._SL1500_.jpg",
      itemPrice: "15,999",
    },
    {
      itemName: "realme NARZO 70 5G（Ice Blue,6GB RAM, 128GB",
      itemImage: "https://m.media-amazon.com/images/I/712qzWNmjFL._SL1500_.jpg",
      itemPrice: "15,999",
    },
    {
      itemName: "realme NARZO 70 5G（Ice Blue,6GB RAM, 128GB",
      itemImage: "https://m.media-amazon.com/images/I/712qzWNmjFL._SL1500_.jpg",
      itemPrice: "15,999",
    },
  ],
};

function ItemsReducer(state = initialData,action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}

export default ItemsReducer;
