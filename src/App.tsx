import PropertyCard from "./components/shared/cards/property-card"
import Header from "./components/shared/navigation/Header"
import SearchArea from "./components/shared/search-area/SearchArea"
import GodrejImage from '@/assets/property/godrej.png'
import { Card } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { SearchIcon } from "lucide-react"
import FilterIcon from '@/assets/filter.png'
import PriceIcon from '@/assets/moneys.png'
import RatingIcon from '@/assets/staroutline.png'
import SortIcon from '@/assets/sort.png'
import { useEffect, useState } from "react"
import { Slider } from "@mui/material"
import ShimmerPropertyCard from "./components/shared/cards/shimmer-property-card"
import { mockData } from "./utils/mockData"

interface RatingProps {
  value: number;
  checked: boolean;
}

function valuetext(value: number) {
  return `${value}°C`;
}

const Rating: React.FC<RatingProps> = ({ value, checked }) => (
  <div className="flex gap-4 mt-4 text-base leading-6 text-neutral-500">
    <div
      className={`shrink-0 my-auto w-4 h-4 rounded-full border border-solid ${
        checked ? "border-4 border-indigo-600" : "border-neutral-300"
      } stroke-[1px]`}
    />
    <div className="outfitRegular">{value} +</div>
  </div>
);

function App() {
  const [value, setValue] = useState<number[]>([0, 100000000]);
  const [loading, setLoading] = useState(true);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const ratings = [
    { value: 4.5, checked: true },
    { value: 4, checked: false },
    { value: 3.5, checked: false },
    { value: 3, checked: false },
  ];

  useEffect(() => {
    // Simulate a delay to showcase the shimmer effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-5 space-y-4">
     <Header />
     <main className="bg-[#F6F8FA]">
      <SearchArea />
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl space-x-5 mt-6">
        <div className="px-5 mb-2 md:px-0 md:mb-0">
          <Card className="md:w-[320px]">
            <div className="space-y-12 p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <img src={FilterIcon} className="w-5" />
                    <h1 className="text-[#4D4D4D] text-lg outfitMedium">Filter</h1>
                  </div>
                  <div>
                    <h1 className="text-[#533FDB] text-sm cursor-pointer outfitRegular">Clear All</h1>
                  </div>
                </div>
                <div className="relative text-[#1C1C1C66]">
                  <Input
                    type="text"
                    placeholder="Search by 'Developer'"
                    value=""
                    className="focus:outline-[#716AEA08] bg-[#F8F8F8] border outfitRegular bordersearch py-5 pl-10 lg:w-[272px]"
                  />
                  <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <img src={PriceIcon} className="w-5" />
                  <h1 className="text-[#1C1C1C] text-lg outfitMedium">Price</h1>
                </div>
                <div className="mt-2 w-auto max-w-[250px]">
                  <div className="relative">
                    <Slider
                      getAriaLabel={() => 'Property Price Range'}
                      value={value}
                      className="ml-2"
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                    />
                  </div>
                  <div className="flex items-center outfitRegular justify-between text-sm text-neutral-600">
                    <div className="">₹ {value[0]}</div>
                    <div className="">₹ {value}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <img src={RatingIcon} className="w-5" />
                  <h1 className="text-[#1C1C1C] text-lg outfitMedium">Rating</h1>
                </div>
                <div>
                {ratings.map((rating) => (
                  <Rating key={rating.value} value={rating.value} checked={rating.checked} />
                ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      <div className="space-y-6 px-5 mt-5 md:mt-0 md:px-0">
        <div className="flex justify-end">
          <div className="bg-white flex items-center outfitMedium space-x-2 px-4 py-2 cursor-pointer">
            <img src={SortIcon} className="w-5" />
            <h1>Sort By</h1>
          </div>
        </div>
        {loading ? (
         <div className="space-y-4">
           <ShimmerPropertyCard />
           <ShimmerPropertyCard />
           <ShimmerPropertyCard />
         </div>
        ) : (
          <div className="space-y-5">
            {mockData.map(property => (
              <PropertyCard
                key={property.id}
                propertyImage={property.propertyImage}
                propertyName={property.propertyName}
                propertyPrice={property.propertyPrice}
                propertyDescription={property.propertyDescription}
                plotArea={property.plotArea}
                rooms={property.rooms}
                ratings={property.ratings}
                bookingAmt={property.bookingAmt}
              />
            ))}
          </div>
        )}
      </div>
     </div>
     </main>
    </div>
  )
}

export default App
