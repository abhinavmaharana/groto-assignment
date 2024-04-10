import { Input } from '@/components/ui/input';
import bgImage from '../../../assets/bg.png';
import { SearchIcon } from 'lucide-react';

const SearchArea = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div className="flex justify-center items-center h-[156px] bg-cover bg-center" style={backgroundImageStyle}>
      <div className="flex flex-col items-center justify-center h-full">
      <div className="relative max-w-7xl">
              <Input
                type="text"
                placeholder="Search for 'Properties in Gurgaon sector 23'"
                value=""
                className="focus:outline-[#716AEA08] rounded-xl border outfitRegular border-[#716AEA08] py-6 pl-10 w-[320px] lg:w-[970px]"
              />
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
            </div>
      </div>
    </div>
  );
}

export default SearchArea