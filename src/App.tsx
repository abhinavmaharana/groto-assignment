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

function App() {
  return (
    <div className="pt-5 space-y-4">
     <Header />
     <main className="bg-[#F6F8FA] ">
      <SearchArea />
      <div className="flex mx-auto max-w-7xl space-x-5 mt-6">
        <div>
          <Card className="w-[320px]">
            <div className="space-y-12 p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <img src={FilterIcon} className="w-5" />
                    <h1 className="text-[#4D4D4D] text-lg">Filter</h1>
                  </div>
                  <div>
                    <h1 className="text-[#533FDB] text-sm cursor-pointer">Clear All</h1>
                  </div>
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search"
                    value=""
                    className="focus:outline-[#716AEA08] rounded-xl border border-gray-300 py-5 pl-10 lg:w-[272px]"
                  />
                  <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <img src={PriceIcon} className="w-5" />
                  <h1 className="text-[#1C1C1C] text-lg">Price</h1>
                </div>
                <div>

                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <img src={RatingIcon} className="w-5" />
                  <h1 className="text-[#1C1C1C] text-lg">Rating</h1>
                </div>
                <div>

                </div>
              </div>
            </div>
          </Card>
        </div>
      <div className="space-y-6">
        <div className="flex justify-end">
          <div className="bg-white flex items-center space-x-2 px-4 py-2 cursor-pointer">
            <img src={SortIcon} className="w-5" />
            <h1>Sort By</h1>
          </div>
        </div>
        <PropertyCard propertyImage={GodrejImage} propertyName="Godrej Properties" propertyPrice="8.30 Cr" propertyDescription="Keeping upp with its legacy, Godrej Properties has now arrived at the Sector 49, near Golf Course Extension Road, with an ultra-luxurious development. It unravels an expansive world brimming with opulence, whose unmatched beauty." plotArea="60 Acres" rooms="4BHK" ratings="4.5" bookingAmt="₹ 10,00,000" />
        <PropertyCard propertyImage={GodrejImage} propertyName="Godrej Properties" propertyPrice="8.30 Cr" propertyDescription="Keeping upp with its legacy, Godrej Properties has now arrived at the Sector 49, near Golf Course Extension Road, with an ultra-luxurious development. It unravels an expansive world brimming with opulence, whose unmatched beauty." plotArea="60 Acres" rooms="4BHK" ratings="4.5" bookingAmt="₹ 10,00,000" />
        <PropertyCard propertyImage={GodrejImage} propertyName="Godrej Properties" propertyPrice="8.30 Cr" propertyDescription="Keeping upp with its legacy, Godrej Properties has now arrived at the Sector 49, near Golf Course Extension Road, with an ultra-luxurious development. It unravels an expansive world brimming with opulence, whose unmatched beauty." plotArea="60 Acres" rooms="4BHK" ratings="4.5" bookingAmt="₹ 10,00,000" />
        <PropertyCard propertyImage={GodrejImage} propertyName="Godrej Properties" propertyPrice="8.30 Cr" propertyDescription="Keeping upp with its legacy, Godrej Properties has now arrived at the Sector 49, near Golf Course Extension Road, with an ultra-luxurious development. It unravels an expansive world brimming with opulence, whose unmatched beauty." plotArea="60 Acres" rooms="4BHK" ratings="4.5" bookingAmt="₹ 10,00,000" />
      </div>
     </div>
     </main>
    </div>
  )
}

export default App
