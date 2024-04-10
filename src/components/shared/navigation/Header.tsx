import { Button } from '@/components/ui/button'
import { MoveUpRight } from 'lucide-react'

const Header = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-0">
    <div className="flex items-center justify-between">
     <div>
       <h1 className="lg:text-[32px] outfitMedium">India<span className="text-[#533FDB]">Realty</span></h1>
     </div>
     <div className="space-x-2 lg:space-x-4">
       <Button variant="outline" className='lg:w-[80px] outfitRegular'>Login</Button>
       <Button variant="default" className='lg:w-[156px] outfitRegular'><div className="flex items-center space-x-1"><h1>Get Started</h1> <MoveUpRight className="h-5" /></div></Button>
     </div>
    </div>
   </div>
  )
}

export default Header