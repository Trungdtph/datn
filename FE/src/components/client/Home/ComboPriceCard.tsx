import React from "react";

type ComboPriceCardProps = {
  image: string;
  title: string;
  price: string;
  style?: React.CSSProperties; // Add this line
};

const ComboPriceCard = ({
  image,
  title,
  price,
}: // style,
ComboPriceCardProps) => {
  return (
    <div
      className="group overflow-hidden relative rounded-[5px] border hover:shadow-lg transform transition-transform duration-300 ease-in-out "
      // style={style}
    >
      <a href="">
        <img
          src={image}
          alt="Service"
          className="w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110 h-[250px]"
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold text-gray-700 dark:text-textDark">
            {title}
          </h5>
          <p className="text-xl font-semibold text-yellow-500">{price} VNĐ</p>
        </div>
      </a>
    </div>
  );
};

export default ComboPriceCard;
