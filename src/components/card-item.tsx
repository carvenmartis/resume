import React from "react";

interface CardItemProps {
  title: string;
  organization?: string;
  city?: string;
  year?: string;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  organization,
  city,
  year,
}) => {
  return (
    <li className="shadow-xl p-5 bg-white rounded-lg">
      <p className="font-semibold">{title}</p>
      {(organization || city) && (
        <p className="font-thin">
          {organization}
          {organization && city && ", "}
          {city}
        </p>
      )}
      <p className="font-thin">{year}</p>
    </li>
  );
};

export default CardItem;
