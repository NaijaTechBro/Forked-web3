 import React, { useState } from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import logo from "../images/airbnbRed.png";
import { Button, ConnectButton, Icon } from "web3uikit";
import RentalsMap from "../components/RentalsMap";

const Rentals = () => {
  const { state: searchFilters } = useLocation();
  const [highLight, setHighLight] = useState(); 
  const rentalslist = [
      {
        attributes: {
          city: "New York",
          unoDescription: "3 Guests • 2 Beds • 2 Rooms",
          dosDescription: "Wifi • Kitchen • Living Area",
          imgUrl:
            "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
          lat: "40.716862",
          long: "-73.999005",
          name: "Apartment in China Town",
          pricePerDay: "3",
        },
      },
    ];

    let cords = [];
    rentalslist.forEach((e) => {
      cords.push({ lat: e.attributes.lat, lng: e.attributes.long});
    });
  
  return (
    <>
    <div className="topBanner">
      <div>
        <Link to="/">
        <img className="logo" src={logo} alt="logo"></img>
        </Link>
      </div>
      <div className="searchReminder">
        
        <div className="filter">
          {searchFilters.destination}

        </div>
        <div className="vl" />
        <div className="filter">
          {`
          ${searchFilters.CheckIn.toLocaleString("default", {month: "short",})}
          ${searchFilters.CheckIn.toLocaleString("default", {day: "2-digit",})}
          - 
          ${searchFilters.CheckOut.toLocaleString("default", {month: "short",})}
          ${searchFilters.CheckOut.toLocaleString("default", {day: "2-digit",})}
          
          `}
        </div>
        <div className="vl" />
        <div className="filter">
          {searchFilters.guests} Guest
        </div>
        <div className="searchFiltersIcon">
          <Icon fill="#ffffff" size={20} svg="search" />
        </div>
      </div>
      <div className="lrContainers">
        <ConnectButton />
      </div>
      </div>

      <hr className="line" />
      <div className="rentalsContent">
        <div className="rentalsContentL">
          Stays Available For Your Destination
          {rentalslist &&
          rentalslist.map((e, i)  => {
            return (
              <>
              <hr className="line2" />
              <div className={highLight === i ? "rentalDivH": "rentalDiv"}>
                <img className="rentalImg" src={e.attributes.imgUrl} alt="my"></img>
                <div className="rentalInfo">
                  <div className="rentalTitle">{e.attributes.name}</div>
                  <div className="rentalDesc">
                    {e.attributes.unoDescription}
                  </div>
                  <div className="rentalDesc">
                    {e.attributes.dosDescription}
                  </div>
                  <div className="bottomButton">
                    <Button
                    text="Stay Here"
                    />
                    <div className="price">
                      <Icon fill="#000000" size={10} svg="matic" /> {e.attributes.pricePerDay} / Day
                    </div>
                  </div>
                </div>
              </div>
              
              
              </>
            )
          })
          }
        </div>
        <div className="rentalsContentR">
          <RentalsMap locations={cords} setHighLight={setHighLight} />
        </div>
      </div>

 
      
    </>
  );
};

export default Rentals;
