import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

const Banner = () => {
  const banners = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/84ae27f93c14a4e3.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5d7b3930dbada2c4.jpg?q=20",
    // "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4e2affd1e5ed65be.jpg?q=20",
    // "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/05adcdf765d309fd.jpg?q=20",
    // "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a89ee09acc1a9e5.jpg?q=20",
  ];

  return (
      <div className="flex overflow-clip">
        {banners.map((img) => {
          const key = v4();
          return <img key={key} src={img} />;
        })}
      </div>
  );
};

export default Banner;
