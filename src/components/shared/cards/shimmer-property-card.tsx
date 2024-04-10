import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const ShimmerPropertyCard = () => {
  return (
    <Card className="border border-gray-200 rounded-lg shadow-md">
        <div className="p-2 flex items-center space-x-5">
            <div>
                <Skeleton className="h-[237px] w-[280px]" />
            </div>
            <div className="space-y-8">
                <Skeleton className="h-10 w-[620px]" />
                <Skeleton className="h-10 w-[620px]" />
                <Skeleton className="h-10 w-[620px]" />
            </div>
        </div>
    </Card>
  )
}

export default ShimmerPropertyCard