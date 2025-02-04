"use client";
import { IconHome, IconMessage, IconUser, IconShoppingCart } from "@tabler/icons-react";

const Navbar = () => {
    return(
        <nav className="flex flex-row justify-between items-center p-4 bg-gray-800 text-white"> 
            <div>
                <h1>Welcome To Zamany Shopping Store</h1>
            </div>
            <div>
                <ul className="flex flex-row space-x-5">
                       <li>
                    <a href="/" className="flex items-center gap-x-1">
                        <IconHome size={20} />
                        Home
                    </a>
                </li> 

                   <li>
                    <a href="/cart" className="flex items-center gap-x-1">
                      <IconShoppingCart size={20} stroke={1.5} />
                        Cart
                    </a>
                </li> 
                   <li>
                    <a href="/signin" className="flex items-center gap-x-1">
                        <IconUser size={20} />
                        SignIn
                    </a>
                </li> 
                
                </ul>
            </div>
            
        </nav>
    )
   
}

export default Navbar;
