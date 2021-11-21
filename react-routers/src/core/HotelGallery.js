import { Component } from "react";
import HotelCard from "./HotelCard";
import data from "../data/data";

class HotelGallery extends Component {
    constructor(props){
        super(props);
        this.state = {clicked:this.props.clicked}
    }
  render() {
    const hotelscards = data.data.map((hotel) => {
        return(
        <HotelCard
          hotelName={hotel.שם}
          hotelAddress={hotel.רחוב}
          houseNum={hotel.בית}
          number={hotel.טלפון}
          clicked ={() => this.state.clicked(hotel)}
        /> )
      })
    return (
      <div className="h-screen w-screen flex-col overflow-y-scroll">
        <div className="flex-col">
          {hotelscards}
          {/* <HotelCard hotelName={data.data[0].שם} hotelAddress={data.data[0].רחוב} houseNum={data.data[0].בית} number={data.data[0].טלפון}/>
        <HotelCard />
        <HotelCard />
        </div>
        <div className="flex-col">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        </div><div className="flex-col">
        <HotelCard />
        <HotelCard />
        <HotelCard /> */}
        </div>
      </div>
    );
  }
}
export default HotelGallery;
