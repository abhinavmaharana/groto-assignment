import { Card } from '@/components/ui/card';
import StarIcon from '@/assets/star.png'
import React from 'react';

type Props = {
    propertyImage: string,
    propertyName: string,
    propertyPrice: string,
    propertyDescription: string,
    plotArea: string,
    rooms: string,
    ratings: string,
    bookingAmt: string
}

const PropertyCard: React.FC<Props> = (props) => {
  return (
    <Card className="border border-gray-200 rounded-lg shadow-md">
      <div className='flex items-center space-x-5'>
        <div>
          <img src={props.propertyImage} className='w-[600px] h-[256px]' />
        </div>
        <div className='px-5 space-y-4'>
          <div className='flex items-center justify-between'>
            <h2 className="font-semibold text-[#1C1C1C] text-xl">{props.propertyName}</h2>
            <p className="text-[#533FDB] font-bold text-xl">{props.propertyPrice}</p>
          </div>
          <div className=''>
            <p className="text-[#6D6D6D] text-sm">{props.propertyDescription}</p>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <div className="text-[#6D6D6D] flex flex-col">
              <h1 className='text-xs'>Plot Area: </h1>
              <span className='text-[#4D4D4D] text-[16px]'>{props.plotArea}</span>
            </div>
            <div className="text-[#6D6D6D] flex flex-col">
              <h1 className='text-xs'>Rooms:</h1>
              <span className='text-[#4D4D4D] text-[16px]'>{props.rooms}</span> 
            </div>
            <div className="text-[#6D6D6D] flex flex-col">
              <h1 className='text-xs'>Ratings:</h1>
              <span className='flex items-center space-x-1'><h1 className='text-[#533FDB]'>{props.ratings}</h1> <img src={StarIcon} className='w-4' /></span> 
            </div>
            <div className="text-[#6D6D6D] flex flex-col">
              <h1 className='text-xs'>Booking Amount:</h1> 
              <span className='text-[#4D4D4D] text-[16px]'>{props.bookingAmt}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default PropertyCard;
