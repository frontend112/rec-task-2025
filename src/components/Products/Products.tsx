import React, { FC } from "react";
import { ProductType } from "../../types/Product";
import { Product } from "../Product/Product";
export const Products: FC<{ products: ProductType[] }> = ({ products }) => {
  console.log(products);
  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>
          <Product {...product} />
        </div>
      ))}
    </section>
  );
};
