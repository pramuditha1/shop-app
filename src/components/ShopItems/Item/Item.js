import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, styled } from "@mui/material";
import styles from "./Item.module.css";

const StyledButton = styled(Button)({
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "rgb(145, 143, 143)",
    color: "black",
  },
});

export default function Item({ item }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <div className={styles.tagHeader}>
        {item.details.tag ? <Typography className={styles.tag}>{item.details?.tag}</Typography> : null}
      </div>
      <CardMedia
        component="img"
        height="70%"
        image={item.details?.image}
        alt={item?.name}
      />
      <CardHeader subheader={item?.name} />

      <CardContent className={styles.cardContent}>
        <Typography variant="body1" color="text.primary">
          ${item.details?.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          or x $1.12
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <StyledButton>
          <Typography>Add to cart</Typography>
        </StyledButton>
      </CardActions>
    </Card>
  );
}
