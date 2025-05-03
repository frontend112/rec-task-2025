import React, { FC } from "react";
import { ProductType } from "../../types/Product";
import { Product } from "../Product/Product";
export const Products: FC<{ products: ProductType[] }> = ({ products }) => (
  <section className="w-full md:flex md:flex-wrap">
    {products.map((product) => (
      <div key={product.id} className="md:w-1/3 ">
        <Product {...product} />
      </div>
    ))}
  </section>
);
