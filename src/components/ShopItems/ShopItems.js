import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ShopItems.module.css";
import Card from "../UI/Card";
import { Grid, Typography } from '@mui/material';
import Item from "./Item/Item";
import {
  fetchItemsData,
  selectItemData,
  selectItemDataLoadingState,
} from "../../store/slices/itemsDataReducer";

const ShopItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemsData());
  }, [dispatch]);

  const itemData = useSelector(selectItemData);
  const isLoading = useSelector(selectItemDataLoadingState);
  console.log(isLoading);
  return (
    <section>
      <Card>
        <Grid container spacing={1}>
          {itemData.length > 0 &&
            itemData.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Item key={item.id} item={item} />
              </Grid>
            ))}
          {isLoading &&(
            <Typography variant="body2" color="text.secondary">
              Loading...
            </Typography>
          )}
        </Grid>
      </Card>
    </section>
  );
};

export default ShopItems;
