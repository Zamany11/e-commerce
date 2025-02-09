import NewsLetter from "./NewsLetter"

export default function Footer() {

   

    return(
        <section className="bg-gray-800 text-white">
            <div className="px-8 md:px-20 py-5 flex items-center justify-between">
                <div className="hidden md:block ">
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
                <div className="hidden md:block">
                    <div className="mb-3">
                        <span className="font-bold">Ouick Links</span> 
                    </div>
                    
                    <div>
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
        </section>
    )
}