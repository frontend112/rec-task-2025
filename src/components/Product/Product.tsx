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
  img,
}) => {
  return (
    <div>
      <div>
        <img src={img} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>
          <span>Pojemność(kg):</span> {capacity}
        </p>
        <p>
          <span>Wymiary (GxSxW):</span> {dimensions}
        </p>
        <p>
          <span>Funkcje: </span> {functions}
        </p>
        <p>
          <span>Klasa energetyczna: </span> {energetic_class}
        </p>
        <p>
          <span>Cena obowiązuje: </span> {promotion_time}
        </p>
        <h3>{price}</h3>
        <p>{(price / 60).toFixed(2)} zł x 60 rat</p>
      </div>
    </div>
  );
};
