import { FC, useMemo, useState } from "react";
import { ProductType } from "../../types/ProductType";
import { Product } from "../Product/Product";
export const Products: FC<{ products: ProductType[] }> = ({ products }) => {
  const [maxCount, setMaxcount] = useState(3);
  const visibleProducts = useMemo(
    () => products.filter((product, index) => maxCount > index),
    [maxCount, products]
  );

  return (
    <>
      <p className="px-2 py-4 text-[14px] leading-[22px]">
        Liczba wyników: {products.length}
      </p>
      <section className="md:flex md:flex-wrap">
        {visibleProducts.map((product) => (
          <div key={product.id} className="md:w-1/3 ">
            <Product {...product} />
          </div>
        ))}
      </section>
      {maxCount < products.length && (
        <div className="flex justify-center">
          <button
            onClick={() => setMaxcount((prev) => prev + 3)}
            className="text-[#007AFF] text-[18px] leading-[20px] py-4 font-bold button-show-more relative"
          >
            Pokaż więcej
          </button>
        </div>
      )}
    </>
  );
};
