import { FC } from "react";
import { ProductType } from "../../types/Product";

export const Product: FC<ProductType> = ({
  id,
  title,
  capacity,
  dimensions,
  energetic_class,
  functions,
  promotion_time,
  price,
}) => {
  return <div>Product</div>;
};
