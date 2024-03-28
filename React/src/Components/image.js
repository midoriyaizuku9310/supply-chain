import React from 'react';
import image from './t6esp1pk.jpg';
import './image.css' // Import your image

const Image = () => {
  return (
    <div className="container-fluid position-relative">
      <div className="row">
        <div className="col">
          <img src={image} className="img-fluid" alt="Dashboard Image" />
          <div className="overlay">
            <h1 className="text-white custom-font">Supply Chain Management System</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;