import React from "react";
import Chips from "../reusable components/chips";
import "./card.css";

const Card = ({ title, tags, image, path }) => {
  const handleCardClick = () => {
    window.open(path, "_blank");
  };

  // const handleCardClick = () => {
  //   const enteredPassword = prompt(
  //     "Enter the password to access this document:"
  //   );
  //   const correctPassword = "your-secure-password"; // Replace with your actual password

  //   if (enteredPassword === correctPassword) {
  //     const pdfUrl = `${window.location.origin}/${path}`;
  //     window.open(pdfUrl, "_blank");
  //   } else {
  //     alert("Incorrect password. Please try again.");
  //   }
  // };

  return (
    <div className="card ">
      <div className="card-img cursor-pointer" onClick={handleCardClick}>
        <img src={image} alt="Card" />
      </div>
      <div className="card-title">{title}</div>

      <div className="chips-list">
        {tags.map((tag, index) => (
          <Chips key={index} text={tag.title} color={tag.color} />
        ))}
      </div>
    </div>
  );
};

export default Card;
