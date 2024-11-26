import React from "react";
import "./Pet.css"; 

const Pet = ({ name, animal, breed, images }) => {
  return (
    <div className="pet-card">
      {images && images.length > 0 ? (
        <img src={images[0]} alt={`${name}`} className="pet-image" />
      ) : (
        <div className="no-image">Image Not Available</div>
      )}
      <div className="pet-info">
        <h1 className="pet-name">{name}</h1>
        <h2 className="pet-animal">{animal}</h2>
        <h2 className="pet-breed">{breed}</h2>
      </div>
    </div>
  );
};

export default Pet;
