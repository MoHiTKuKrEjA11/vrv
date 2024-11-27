import { Button } from './ui/button'
import { FaPlus } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between py-4 border-b-2 shadow-md px-14 '>
        <h1 className='text-xl font-extrabold'>Role Based Access Control (R.B.C.A)</h1>
        <div className='flex items-center gap-5'>
          <Button><FaPlus />Project</Button>
          <Button><FaPlus />User</Button>
          <h1>Admin</h1>

        </div>
      </div>
    </>
  )
}

export default Navbar