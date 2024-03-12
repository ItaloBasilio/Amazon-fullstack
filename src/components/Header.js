import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";


function Header() {
  return (
    <header>
        {/* Top Navbar */}
        <div className="flex items-center bg-amazon_blue p-2 flex-grow py-2">
            <div className="mt-2 mr-2 flex items-center flex-grow sm:flex-grow-0">
                <Image 
                    src='https://links.papareact.com/f90'
                    width={100}
                    height={40}
                    objectFit="contain"
                    className='cursor-pointer'
                />
            </div>

          {/* Search */}
          <div className="hidden sm:flex items-center rounded-md flex-grow cursor-pointer h-10 bg-yellow-400 hover:bg-yellow-500">
            <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
            <SearchIcon className='h-12 p-4'/>
          </div>

          {/* Right */}
          <div className="text-white">
              <div>
                <p>Hello Italo Basilio</p>
              </div>
              <div></div>
              <div></div>
          </div>

        </div>

        {/* Bottom Navbar */}
        <div></div>
    </header>
  )
}

export default Header