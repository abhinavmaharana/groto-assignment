import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import FilterIcon from '@/assets/filter.png'
import PriceIcon from '@/assets/moneys.png'
import RatingIcon from '@/assets/staroutline.png'
import { Slider } from "@mui/material"
import { useEffect, useState } from "react"
import { mockData } from "@/utils/mockData"

interface RatingProps {
    value: number;
    checked: boolean;
    onChange: (value: number) => void;
}

interface PropertyType {
    id: number;
    propertyImage: string;
    propertyName: string;
    propertyPrice: number;
    propertyDescription: string;
    plotArea: string;
    rooms: string;
    ratings: string;
    bookingAmt: string;
  }

function valuetext(value: number) {
    return `${value}°C`;
  }
  
  const Rating: React.FC<RatingProps> = ({ value, checked, onChange }) => (
    <div className="flex gap-4 mt-4 text-base leading-6 text-neutral-500">
      <div
        className={`shrink-0 my-auto w-4 h-4 rounded-full border border-solid ${
          checked ? "border-4 border-indigo-600" : "border-neutral-300"
        } stroke-[1px]`}
        onClick={() => onChange(value)}
      />
      <div className="outfitRegular">{value} +</div>
    </div>
  );

const FilterCard = () => {
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState<number[]>([0, 100000000]);
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
    const [priceFilter] = useState<number[]>([0, 100000000]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [ratingFilter] = useState<number[]>([]);
    const [filterApplied, setFilterApplied] = useState<boolean>(false);
    const [filteredData, setFilteredData] = useState<PropertyType[]>([]);

    console.log(loading,filteredData)

    const handleChange = (_event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleRatingChange = (rating: number) => {
        if (selectedRatings.includes(rating)) {
          setSelectedRatings(selectedRatings.filter((r) => r !== rating));
        } else {
          setSelectedRatings([...selectedRatings, rating]);
        }
      };
    
      const ratings = [
        { value: 4.5, checked: selectedRatings.includes(4.5) },
        { value: 4, checked: selectedRatings.includes(4) },
        { value: 3.5, checked: selectedRatings.includes(3.5) },
        { value: 3, checked: selectedRatings.includes(3) },
      ];

      const applyFilters = () => {
        // Filter data based on selected options
        let newData = mockData.filter(property => {
          // Apply price filter
          const priceInRange = Number(property.propertyPrice) >= priceFilter[0] && Number(property.propertyPrice) <= priceFilter[1];
          // Apply rating filter if ratings are selected
          const meetsRating = ratingFilter.length === 0 || ratingFilter.includes(parseFloat(property.ratings));
          // Apply search query filter
          const matchesSearch = property.propertyName.toLowerCase().includes(searchQuery.toLowerCase());
      
          return priceInRange && meetsRating && matchesSearch;
        });
      
        // Update filtered data and set filterApplied to true
        setFilteredData(newData);
        setFilterApplied(true);
      };
    
      useEffect(() => {
        // Apply filters only when filter is applied
        if (filterApplied) {
          setLoading(true); // Show shimmer effect
          // Simulate a delay to showcase the shimmer effect
          const timer = setTimeout(() => {
            setLoading(false);
          }, 2000);
          // Clear the timer when component unmounts
          return () => clearTimeout(timer);
        }
      }, [filterApplied]);
  return (
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
                  <Rating key={rating.value} value={rating.value} checked={rating.checked} onChange={handleRatingChange}/>
                ))}
                </div>
              </div>
              <div>
                <button onClick={applyFilters} className="bg-[#533FDB] text-white py-2 px-[116px] rounded">Apply</button>
              </div>
            </div>
          </Card>
  )
}

export default FilterCard