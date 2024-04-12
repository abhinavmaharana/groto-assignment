import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import FilterIcon from "@/assets/filter.png";
import PriceIcon from "@/assets/moneys.png";
import RatingIcon from "@/assets/staroutline.png";
import { Slider, styled } from "@mui/material";
import { mockData } from "@/utils/mockData";

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

interface FilterCardProps {
  setFilteredData: React.Dispatch<React.SetStateAction<PropertyType[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function valuetext(value: number) {
  return `₹ ${value.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })} Crore`;
}

const Rating: React.FC<RatingProps> = ({ value, checked, onChange }) => (
  <div className="mt-4 flex gap-4 text-base leading-6 text-neutral-500">
    <div
      className={`my-auto h-4 w-4 shrink-0 rounded-full border border-solid ${
        checked ? "border-4 border-indigo-600" : "border-neutral-300"
      } stroke-[1px]`}
      onClick={() => onChange(value)}
    />
    <div className="outfitRegular">{value} +</div>
  </div>
);

const FilterCard: React.FC<FilterCardProps> = ({
  setFilteredData,
  setLoading,
}) => {
  const [value, setValue] = useState<number[]>([0, 100000000]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterApplied, setFilterApplied] = useState<boolean>(false);
  const [filtersChanged, setFiltersChanged] = useState<boolean>(false);
  const [filters, setFilters] = useState<any>({
    value: [0, 100000000],
    selectedRatings: [],
    searchQuery: "",
  });

  console.log(filters);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    setFilters({ ...filters, value: newValue });
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRatings((prevSelectedRatings) => {
      if (prevSelectedRatings.includes(rating)) {
        return prevSelectedRatings.filter((r) => r !== rating);
      } else {
        return [...prevSelectedRatings, rating];
      }
    });
  };

  useEffect(() => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      selectedRatings: selectedRatings,
    }));
  }, [selectedRatings]);

  useEffect(() => {
    // Check if either the search query or filters other than searchQuery changed
    const isFiltersChanged =
      JSON.stringify(filters) !==
        JSON.stringify({
          value: [0, 100000000],
          selectedRatings: [],
          searchQuery: "",
        }) || searchQuery.trim() !== "";
    setFiltersChanged(isFiltersChanged);
  }, [filters, searchQuery]);

  const applyFilters = () => {
    // Set loading state to true to show shimmer
    setLoading(true);

    // Simulate filtering delay
    setTimeout(() => {
      // Filter data based on selected options
      const newData = mockData.filter((property) => {
        // Apply price filter
        const priceInRange =
          property.propertyPrice >= value[0] * 10000000 &&
          property.propertyPrice <= value[1] * 10000000;
        // Convert property.ratings to a number for comparison
        const propertyRating = parseFloat(property.ratings);
        // Apply rating filter if ratings are selected
        const meetsRating =
          selectedRatings.length === 0 ||
          selectedRatings.includes(propertyRating);
        // Apply search query filter
        const matchesSearch = property.propertyName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return priceInRange && meetsRating && matchesSearch;
      });

      console.log("Filtered Data:", newData);

      // Update filtered data and set filterApplied to true
      setFilteredData(newData);
      setFilterApplied(true);

      // Reset loading state after filtering is complete
      setLoading(false);
    }, 2000); // Simulated delay time
  };

  const PriceRangeSlider = styled(Slider)(({ theme }) => ({
    color: "#716AEA",
    height: 3,
    padding: "12px 0",
    "& .MuiSlider-thumb": {
      height: 27,
      width: 27,
      backgroundColor: "#716AEA",
      border: "1px solid currentColor",
      "&:hover": {
        boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
      },
      "& .pricerange-bar": {
        height: 9,
        width: 1,
        backgroundColor: "currentColor",
        marginLeft: 1,
        marginRight: 1,
      },
    },
    "& .MuiSlider-track": {
      height: 3,
    },
    "& .MuiSlider-rail": {
      color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
      opacity: theme.palette.mode === "dark" ? undefined : 1,
      height: 3,
    },
  }));

  const formatPrice = (price: number): string => {
    if (price >= 10000000) {
      const crorePrice = price / 10000000;
      return `${crorePrice.toFixed(1)} Cr`;
    }
    const lakhPrice = price / 100000;
    return `${lakhPrice.toFixed(0)} Lakhs`;
  };

  useEffect(() => {
    if (filterApplied) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [filterApplied]);

  return (
    <Card className="md:w-[320px]">
      <div className="space-y-9 p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <img src={FilterIcon} className="w-5" />
              <h1 className="outfitMedium text-lg text-[#4D4D4D]">Filter</h1>
            </div>
            <div>
              <h1
                onClick={() => {
                  setFilters({
                    value: [0, 100000000],
                    selectedRatings: [],
                    searchQuery: "",
                  });
                  setValue([0, 100000000]);
                  setSelectedRatings([]);
                  setSearchQuery("");
                  setFilterApplied(false);
                }}
                className="outfitRegular cursor-pointer text-sm text-[#533FDB]"
              >
                Clear All
              </h1>
            </div>
          </div>
          <div className="relative text-[#1C1C1C66]">
            <Input
              type="text"
              placeholder="Search by 'Developer'"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outfitRegular bordersearch border bg-[#F8F8F8] py-5 pl-10 focus:outline-[#716AEA08] lg:w-[272px]"
            />
            <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-1">
            <img src={PriceIcon} className="w-5" />
            <h1 className="outfitMedium text-lg text-[#1C1C1C]">Price</h1>
          </div>
          <div className="mt-2 w-auto max-w-[250px]">
            <div className="relative">
              <PriceRangeSlider
                getAriaLabel={() => "Property Price Range"}
                value={value}
                min={0}
                max={100000000}
                step={0.1}
                className="ml-2"
                onChange={handleChange}
                getAriaValueText={valuetext}
              />
            </div>
            <div className="outfitRegular flex items-center justify-between text-sm text-neutral-600">
              <div className="">₹ {formatPrice(value[0])}</div>
              <div className="">₹ {formatPrice(value[1])}</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center space-x-1">
            <img src={RatingIcon} className="w-5" />
            <h1 className="outfitMedium text-lg text-[#1C1C1C]">Rating</h1>
          </div>
          <div>
            {[
              { value: 4.5, checked: selectedRatings.includes(4.5) },
              { value: 4, checked: selectedRatings.includes(4) },
              { value: 3.5, checked: selectedRatings.includes(3.5) },
              { value: 3, checked: selectedRatings.includes(3) },
            ].map((rating) => (
              <Rating
                key={rating.value}
                value={rating.value}
                checked={rating.checked}
                onChange={handleRatingChange}
              />
            ))}
          </div>
        </div>
        <div className="">
          {filtersChanged && (
            <div className="">
              <button
                onClick={applyFilters}
                className="rounded bg-[#533FDB] px-[116px] py-2 text-white"
              >
                Apply
              </button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FilterCard;
