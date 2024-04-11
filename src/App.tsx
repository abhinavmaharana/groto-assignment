import PropertyCard from "@/components/shared/cards/property-card"
import Header from "@/components/shared/navigation/Header"
import SearchArea from "@/components/shared/search-area/SearchArea"
import SortIcon from '@/assets/sort.png'
import { useEffect, useState } from "react"
import ShimmerPropertyCard from "@/components/shared/cards/shimmer-property-card"
import { mockData } from "./utils/mockData"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import FilterCard from "./components/shared/cards/filter-card"

function App() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    // Simulate a delay to showcase the shimmer effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  const filteredData1 = mockData.filter(property =>
    property.propertyName.toLowerCase().includes(searchQuery.toLowerCase())
  );


  // Sorting function based on the current sorting criteria and order
  const sortedData = [...filteredData1].sort((a, b) => {
    switch (sortBy) {
      case "price":
        return sortOrder === "asc" ? Number(a.propertyPrice) - Number(b.propertyPrice) : Number(b.propertyPrice) - Number(a.propertyPrice);
      case "rating":
        // Parse ratings as numbers
        const ratingA = parseFloat(a.ratings);
        const ratingB = parseFloat(b.ratings);
        return sortOrder === "asc" ? ratingA - ratingB : ratingB - ratingA;
      case "alphabetical":
        return sortOrder === "asc" ? a.propertyName.localeCompare(b.propertyName) : b.propertyName.localeCompare(a.propertyName);
      default:
        return 0;
    }
  });

  return (
    <div className="pt-5 space-y-4">
     <Header />
     <main className="bg-[#F6F8FA]">
      <SearchArea setSearchQuery={setSearchQuery} />
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl space-x-5 mt-6">
        <div className="px-5 mb-2 md:px-0 md:mb-0">
          <FilterCard />
        </div>
      <div className="space-y-6 px-5 mt-5 md:mt-0 md:px-0">
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="bg-white flex items-center outfitMedium space-x-2 px-4 py-2 cursor-pointer" onClick={toggleDropdown}>
                <img src={SortIcon} className="w-5" />
                <h1>Sort By</h1>
              </button>
            </DropdownMenuTrigger>
            {dropdownOpen && (
            <DropdownMenuContent className="w-[320px] bg-white space-y-2 -mt-11">
              <button className="bg-white flex items-center outfitMedium space-x-2 px-4 py-2 cursor-pointer">
                <img src={SortIcon} className="w-5" />
                <h1>Sort By</h1>
              </button>
              <div>
                <DropdownMenuLabel>Property Price</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => { setSortBy("price"); setSortOrder("desc"); }}>
                    High to Low
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => { setSortBy("price"); setSortOrder("asc"); }}>
                    Low to High
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </div>
              <DropdownMenuSeparator />
              <div>
                <DropdownMenuLabel>Plot Area</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    High to Low
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Low to High
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </div>
              <DropdownMenuSeparator />
              <div>
                <DropdownMenuLabel>Ratings</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => { setSortBy("rating"); setSortOrder("desc"); }}>
                    High to Low
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => { setSortBy("rating"); setSortOrder("asc"); }}>
                    Low to High
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </div>
              <DropdownMenuSeparator />
              <div>
                    <DropdownMenuLabel>Alphabetical</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => { setSortBy("alphabetical"); setSortOrder("asc"); }}>
                        A to Z
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => { setSortBy("alphabetical"); setSortOrder("desc"); }}>
                        Z to A
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </div>
            </DropdownMenuContent>
            )}
          </DropdownMenu>
        </div>
        {loading ? (
         <div className="space-y-4">
           <ShimmerPropertyCard />
           <ShimmerPropertyCard />
           <ShimmerPropertyCard />
         </div>
        ) : (
          <div className="space-y-5">
            {sortedData.map((property) => (
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
