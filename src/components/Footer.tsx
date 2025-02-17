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
                        <span>Have Questions? Call Us!</span>
                    </div>
                    <div>
                        08026057491, 07045960587
                    </div>
                    <div>
                        Whatsapp: 07065477228
                    </div>
                </div>
                <NewsLetter />
                <div className="hidden md:block ">
                    <div className="">
                        <div className="mb-3">
                        <span className="font-bold">Ouick Links</span> 
                    </div>
                    
                    <div className="">
                        <ul >
                            <li>About Us</li>
                            <li>Sell on Zitech</li>
                            <li>Become an affiliate</li>
                            <li>Smartphones</li>
                            <li>Latest Iphones</li>
                            <li>Samsung Phones</li>
                            <li>Infinix Phones</li>
                            <li>Techno Phones</li>
                            <li>Itel Phones</li>
                            <li>Redmi Phones</li>
                            <li>Mobile Accessories</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
                
                <div className="border-t border-gray-600 mt-8 pt-8 text-center px-8">
                  <p>&copy; {new Date().getFullYear()} Developed by Zitech. All rights reserved.</p>
               </div>
        </section>
    )
}