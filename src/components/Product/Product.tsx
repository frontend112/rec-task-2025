import { FC } from "react";
import beak from "../../images/green-beak.png";
import { ProductType } from "../../types/ProductType";
export const Product: FC<ProductType> = ({
  title,
  capacity,
  dimensions,
  energetic_class,
  functions,
  promotion_time,
  price,
  img,
}) => {
  const priceZl = Math.floor(price);
  let priceGr = "00";
  if (priceZl !== price) {
    priceGr = `${Math.round((price - priceZl) * 100)}`;
  }
  if (priceGr.length === 1) {
    // if grosz amount is between 1 and 9 included then we need to add zero at beginning
    priceGr = "0" + priceGr;
  }
  return (
    <div className="p-2">
      <div className="rounded-[20px] p-[25px] bg-white ">
        <div>
          <img src={img} alt={title} className="m-auto" />
        </div>
        <h2 className="pt-3 max-w-[290px] pr-9 font-bold text-[18px] leading-[22px]">
          {title}
        </h2>

        <div className="pt-[37px] font-bold">
          <p>
            <span className="description-grey font-normal">
              Pojemność (kg):
            </span>
            {capacity}
          </p>
          <p>
            <span className="description-grey font-normal">
              Wymiary (GxSxW):
            </span>
            {dimensions}
          </p>
          <p>
            <span className="description-grey font-normal">Funkcje: </span>
            {functions}
          </p>
        </div>
        <div className="pt-4 flex items-center gap-2">
          <p className="description-grey">Klasa energetyczna</p>
          <div className="relative w-[49px] h-[18px]">
            <img
              src={beak}
              alt={`klasa energetyczna ${energetic_class}`}
              className="relative w-full h-auto"
            />
            <span className="absolute top-[2px] left-1 text-sm text-white leading-[14px] font-bold">
              {energetic_class}
            </span>
          </div>
        </div>
        <p className="pt-4 description-grey">
          Cena obowiązuje: {promotion_time}
        </p>
        <div className="font-bold flex">
          <h3 className="text-[40px] leading-[40px]">{priceZl}</h3>
          <h3 className="text-[14px] leading-[16px] flex flex-col pl-1 justify-center">
            <span>{priceGr}</span>
            <span>zł</span>
          </h3>
        </div>
        <p className="pt-4 font-bold text-[16px]">
          {(price / 60).toFixed(2)} zł x 60 rat
        </p>
        <div className="flex justify-center pt-4">
          <button className="px-10 font-bold py-2 rounded-3xl bg-[#1428A0] hover:bg-[#1C1C1C] text-white uppercase tracking-widest">
            Wybierz
          </button>
        </div>
      </div>
    </div>
  );
};
