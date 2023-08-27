import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import { get } from "lodash";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchItemsData = createAsyncThunk("itemsData/fetch", async () => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch chart data.");
  }
});

const ItemsDataSlice = createSlice({
  name: "itemsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItemsData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchItemsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ItemsDataSlice.reducer;

//selectors

const itemDataDomain = (state) => state.itemsData;

export const selectItemDataLoadingState = createSelector(
  itemDataDomain,
  (itemsData) => itemsData.loading
);

export const selectItemDataErrorState = createSelector(
  itemDataDomain,
  (itemsData) => itemsData.error
);
//select all fetched items
export const selectItemData = createSelector(
  itemDataDomain,
  (itemsData) => itemsData.data
);