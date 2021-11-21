import React from "react";
import HotelGallery from "./HotelGallery";
import HotelPage from "./HotelPage";

function HomePage(props) {
  const clicked = (hotel) => {
    console.log(hotel);
  };

  return (
    <div>
      <div className="w-3/4 mx-auto bg-gray-400 rounded-xl my-6 p-2">
        <h1>Israel Hotels</h1>
        <h6 className="mb-10 ">When You Need A Little Bit More.</h6>
      </div>
      <HotelGallery clicked={clicked} />
    </div>
  );
}

export default HomePage;
