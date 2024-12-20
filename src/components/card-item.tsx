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
    <li>
      <p className="font-bold">{title}</p>
      {(organization || city) && (
        <p>
          {organization}
          {organization && city && ", "}
          {city}
        </p>
      )}
      <p>{year}</p>
    </li>
  );
};

export default CardItem;
