import React from "react";

interface CardItemProps {
  degree: string;
  school?: string;
  city: string;
  year?: string;
}

const CardItem: React.FC<CardItemProps> = ({ degree, school, city, year }) => {
  return (
    <li>
      <div>
        <p className="font-bold">{degree}</p>
        <p>
          {school}, {city}
        </p>
        <p>{year}</p>
      </div>
    </li>
  );
};

export default CardItem;
