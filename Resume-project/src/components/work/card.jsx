import React from "react";
import Chips from "../reusable components/chips";
import "./card.css";

const Card = ({ title, tags, image, path }) => {
  const handleCardClick = () => {
    if (path) {
      // Construct the full path to the PDF in the public folder
      const pdfUrl = `${window.location.origin}/${path}`;
      window.open(pdfUrl, "_blank");
    }
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
    <div className="card cursor-pointer" onClick={handleCardClick}>
      <div className="card-img">
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
