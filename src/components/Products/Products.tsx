import React, { FC } from "react";
import { ProductType } from "../../types/ProductType";
import { Product } from "../Product/Product";
export const Products: FC<{ products: ProductType[] }> = ({ products }) => (
  <>
    <p className="pt-4">Liczba wyników: {products.length}</p>
    <section className="md:flex md:flex-wrap">
      {products.map((product) => (
        <div key={product.id} className="md:w-1/3 ">
          <Product {...product} />
        </div>
      ))}
    </section>
  </>
);
