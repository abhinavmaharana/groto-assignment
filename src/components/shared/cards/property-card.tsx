import { Card } from '@/components/ui/card';
import StarIcon from '@/assets/star.png'
import React from 'react';

type Props = {
    propertyImage: string,
    propertyName: string,
    propertyPrice: number,
    propertyDescription: string,
    plotArea: string,
    rooms: string,
    ratings: string,
    bookingAmt: string
}

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
}

const PropertyCard: React.FC<Props> = (props) => {
  return (
    <Card className="border border-gray-200 rounded-lg shadow-md">
      <div className='flex flex-col md:flex-row items-center md:space-x-5 p-5 md:p-0'>
        <div>
          <img src={props.propertyImage} className='w-[400px] h-[250px] md:w-[600px] md:h-[256px]' />
        </div>
        <div className='p-5 space-y-2 md:px-5 md:space-y-4'>
          <div className='flex items-center justify-between'>
            <h2 className="font-semibold text-[#1C1C1C] text-xl outfitSemibold">{props.propertyName}</h2>
            <p className="text-[#533FDB] font-bold text-xl outfitBold">{formatPrice(props.propertyPrice)}</p>
          </div>
          <div className=''>
            <p className="text-[#6D6D6D] text-sm outfitLight">{props.propertyDescription}</p>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <div className="text-[#6D6D6D] flex flex-col">
              <h1 className='text-xs outfitLight'>Plot Area: </h1>
              <span className='text-[#4D4D4D] text-[16px] outfitRegular'>{props.plotArea}</span>
            </div>
            <div className="text-[#6D6D6D] flex flex-col">
              <h1 className='text-xs outfitLight'>Rooms:</h1>
              <span className='text-[#4D4D4D] text-[16px] outfitRegular'>{props.rooms}</span> 
            </div>
            <div className="text-[#6D6D6D] flex flex-col">
              <h1 className='text-xs outfitLight'>Ratings:</h1>
              <span className='flex items-center space-x-1 outfitRegular'><h1 className='text-[#533FDB]'>{props.ratings}</h1> <img src={StarIcon} className='w-4' /></span> 
            </div>
            <div className="text-[#6D6D6D] flex flex-col">
              <h1 className='text-xs outfitLight'>Booking Amount:</h1> 
              <span className='text-[#4D4D4D] text-[16px] outfitRegular'>{props.bookingAmt}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default PropertyCard;
