import { Button } from '@/components/ui/button'
import { MoveUpRight } from 'lucide-react'

const Header = () => {
  return (
    <div className="mx-auto max-w-7xl">
    <div className="flex items-center justify-between">
     <div>
       <h1 className="text-[32px]">India<span className="text-[#533FDB]">Realty</span></h1>
     </div>
     <div className="space-x-4">
       <Button variant="outline" className='w-[80px]'>Login</Button>
       <Button variant="default" className='w-[156px]'><div className="flex items-center space-x-1"><h1>Get Started</h1> <MoveUpRight className="h-5" /></div></Button>
     </div>
    </div>
   </div>
  )
}

export default Header