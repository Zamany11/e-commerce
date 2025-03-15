import Link from "next/link";
import NewsLetter from "./NewsLetter";


export default function Footer() {

    return(
        <section className="bg-gray-800 text-white py-3">
            <div className="px-8 md:px-20 py-5 flex flex-col md:flex-row justify-between">
                <div className="mb-6">
                    <div className="mb-3">
                      <h1 className="font-bold">ELIMELI</h1>  
                    </div>
                    
                    <div>
                        <span className="font-sans">Have Questions? Call Us!</span>
                    </div>
                    <div className="font-sans">
                        08026057491, 07045960587
                    </div>
                    <div className="font-sans">
                        Whatsapp: 07065477228
                    </div>
                </div>
                <NewsLetter />
                <div className="hidden md:block ">
                    <div className="">
                        <div className="mb-3">
                        <span className="font-bold">Ouick Links</span> 
                    </div>
                    
                    <div className="font-sans">
                        <ul>
                            <li className="hover:underline">About Us</li>
                            <li className="hover:underline">Sell on Zitech</li>
                            <li className="hover:underline">Smartphones</li>
                            <li className="hover:underline">Mobile Accessories</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
                
                <div className="border-t border-gray-600 mt-8 pt-8 text-center px-8">
                    <Link href="https://wa.me/message/SYION5AVZPNSK1">
                         <p>&copy; {new Date().getFullYear()} Developed by 
                            <span className="text-blue-300 hover:underline"> Zamany Web Dev</span> <br />
                             All rights reserved.</p>
                  </Link>
               </div>
        </section>
    )
}