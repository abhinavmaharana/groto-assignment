import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";

const Header = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-0">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="outfitMedium lg:text-[32px]">
            India<span className="text-[#533FDB]">Realty</span>
          </h1>
        </div>
        <div className="space-x-2 lg:space-x-4">
          <Button variant="outline" className="outfitRegular lg:w-[80px]">
            Login
          </Button>
          <Button variant="default" className="outfitRegular lg:w-[156px]">
            <div className="flex items-center space-x-1">
              <h1>Get Started</h1> <MoveUpRight className="h-5" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
