import { Card } from "@/components/ui/card";
import StarIcon from "@/assets/star.png";
import React from "react";

type Props = {
  propertyImage: string;
  propertyName: string;
  propertyPrice: number;
  propertyDescription: string;
  plotArea: string;
  rooms: string;
  ratings: string;
  bookingAmt: string;
};

// Function to format property price
const formatPrice = (price: number): string => {
  // If price is greater than or equal to 1 crore, convert it to crore format
  if (price >= 10000000) {
    const crorePrice = price / 10000000;
    return `${crorePrice.toFixed(1)} Cr`;
  }
  // Otherwise, return price in lakhs
  const lakhPrice = price / 100000;
  return `${lakhPrice.toFixed(0)} Lakhs`;
};

const PropertyCard: React.FC<Props> = (props) => {
  return (
    <Card className="rounded-lg border border-gray-200 shadow-md">
      <div className="flex flex-col items-center p-5 md:flex-row md:space-x-5 md:p-0">
        <div>
          <img
            src={props.propertyImage}
            className="h-[250px] w-[400px] md:h-[256px] md:w-[600px]"
          />
        </div>
        <div className="space-y-2 p-5 md:space-y-4 md:px-5">
          <div className="flex items-center justify-between">
            <h2 className="outfitSemibold text-xl font-semibold text-[#1C1C1C]">
              {props.propertyName}
            </h2>
            <p className="outfitBold text-xl font-bold text-[#533FDB]">
              {formatPrice(props.propertyPrice)}
            </p>
          </div>
          <div className="">
            <p className="outfitLight text-sm text-[#6D6D6D]">
              {props.propertyDescription}
            </p>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex flex-col text-[#6D6D6D]">
              <h1 className="outfitLight text-xs">Plot Area: </h1>
              <span className="outfitRegular text-[16px] text-[#4D4D4D]">
                {props.plotArea}
              </span>
            </div>
            <div className="flex flex-col text-[#6D6D6D]">
              <h1 className="outfitLight text-xs">Rooms:</h1>
              <span className="outfitRegular text-[16px] text-[#4D4D4D]">
                {props.rooms}
              </span>
            </div>
            <div className="flex flex-col text-[#6D6D6D]">
              <h1 className="outfitLight text-xs">Ratings:</h1>
              <span className="outfitRegular flex items-center space-x-1">
                <h1 className="text-[#533FDB]">{props.ratings}</h1>{" "}
                <img src={StarIcon} className="w-4" />
              </span>
            </div>
            <div className="flex flex-col text-[#6D6D6D]">
              <h1 className="outfitLight text-xs">Booking Amount:</h1>
              <span className="outfitRegular text-[16px] text-[#4D4D4D]">
                {props.bookingAmt}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
