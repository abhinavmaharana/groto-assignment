import { Input } from "@/components/ui/input";
import bgImage from "../../../assets/bg.png";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

interface SearchAreaProps {
  setSearchQuery: (query: string) => void;
}

const SearchArea: React.FC<SearchAreaProps> = ({ setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const backgroundImageStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearchInput(input);
    setSearchQuery(input);
  };

  return (
    <div
      className="flex h-[156px] items-center justify-center bg-cover bg-center"
      style={backgroundImageStyle}
    >
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative max-w-7xl">
          <Input
            type="text"
            placeholder="Search for 'Properties in Gurgaon sector 23'"
            value={searchInput}
            onChange={handleSearchInputChange}
            className="outfitRegular w-[320px] rounded-xl border border-[#716AEA08] py-6 pl-10 focus:outline-[#716AEA08] lg:w-[970px]"
          />
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
