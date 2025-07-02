import React from "react";
import Chips from "./chips";
import "./card.css";

const Card = ({ title, tags, image, path }) => {
  const handleCardClick = () => {
    window.open(path, "_blank");
  };

  return (
    <div className="card cursor-pointer ">
      <div className="card-title">{title}</div>
      <div className="card-img " onClick={handleCardClick}>
        <img
          src={image}
          alt="Card"
          // className={
          //   image == "/images/homeowner.png" || image == "/images/nft_ad.png"
          //     ? "max-width-101"
          //     : ""
          // }
        />
      </div>

      <div className="chips-list">
        {tags.map((tag, index) => (
          <Chips key={index} text={tag.title} color={tag.color} />
        ))}
      </div>
    </div>
  );
};

export default Card;
