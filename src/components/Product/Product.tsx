import { FC } from "react";
import beak from "../images/beak.png";
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
    <div className="p-2">
      <div className="bg-white rounded-[20px] p-[25px]">
        <div>
          <img src={img} alt={title} className="m-auto" />
        </div>
        {/* need to add new line after Pralka */}
        <div className="pt-3 max-w-[290px] pr-9">
          <h2>{title}</h2>
        </div>
        <div className="pt-[37px]">
          <p>
            <span>Pojemność(kg):</span> {capacity}
          </p>
          <p>
            <span>Wymiary (GxSxW):</span> {dimensions}
          </p>
          <p>
            <span>Funkcje: </span> {functions}
          </p>
        </div>
        <div className="pt-4">
          <div className="relative w-[49px] h-[18px]">
            <img
              src={beak}
              alt={`klasa energetyczna ${energetic_class}`}
              className="relative w-full h-auto"
            />
            <span className="absolute top-[2px] left-1 text-sm text-white leading-[14px]">
              {energetic_class}
            </span>
          </div>
        </div>
        <p className="pt-4">
          <span>Cena obowiązuje: </span> {promotion_time}
        </p>
        <h3>{price}</h3>
        <p className="pt-4">{(price / 60).toFixed(2)} zł x 60 rat</p>
        <div className="flex justify-center pt-4">
          <button className="px-10 py-2 rounded-3xl bg-[#1428A0] hover:bg-[#1C1C1C] text-white uppercase">
            Wybierz
          </button>
        </div>
      </div>
    </div>
  );
};
