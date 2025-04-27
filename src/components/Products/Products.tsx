import React, { FC } from "react";
import { ProductType } from "../../types/Product";

export const Products: FC<{ products: ProductType[] }> = ({ products }) => {
  return <div>Products</div>;
};
