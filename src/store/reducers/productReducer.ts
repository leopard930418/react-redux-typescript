import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productData, ProductDataset } from "data/product_data";
import { RootState } from "store";

const initialState: ProductDataset = productData;

export const productReducer = createSlice({
  name: "product",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setProductData: (state, action: PayloadAction<ProductDataset>) => {
      return action.payload;
    },
  },
});

export const { setProductData } = productReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProductData = (state: RootState) => state.product;

export default productReducer.reducer;
