import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ShimmerPropertyCard = () => {
  return (
    <Card className="rounded-lg border border-gray-200 shadow-md">
      <div className="flex flex-col items-center md:flex-row md:space-x-5 p-5 md:p-2">
        <div>
          <Skeleton className="h-[237px] w-[280px]" />
        </div>
        <div className="mt-2 md:mt-0 space-y-4 md:space-y-8">
          <Skeleton className="h-10 w-[280px] md:w-[620px]" />
          <Skeleton className="h-10 w-[280px] md:w-[620px]" />
          <Skeleton className="h-10 w-[280px] md:w-[620px]" />
        </div>
      </div>
    </Card>
  );
};

export default ShimmerPropertyCard;
