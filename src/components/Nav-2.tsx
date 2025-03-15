import Link from "next/link";
import { FaBox, FaStore, FaPhoneAlt } from "react-icons/fa";

export default function Nav2() {
    return(
        <section className="text-gray-900">
              <div className="container mx-auto flex items-center justify-around py-3">
                <ul className="flex space-x-6 font-sans font-medium">
                    <li>
                       <Link href="/" className="flex items-center gap-1 hover:text-red-800 text-red-600 transition-colors">
                         <FaBox className="text-sm" />
                         <span>Track Orders</span>
                       </Link> 
                    </li>
                    <li>
                    <Link href="/" className="flex items-center gap-1 hover:text-red-800 text-red-600 transition-colors">
                      <FaStore className="text-sm" />
                      <span>Sell</span>
                    </Link>
                    </li>
                    <li>
                      <Link href="/" className="flex items-center gap-1 hover:text-red-800 text-red-600 transition-colors">
                      <FaPhoneAlt className="text-sm" />
                      <span>Call to Order</span>
                   </Link>
                    </li> 
                </ul>
                
              </div>
            </section>
    )
}