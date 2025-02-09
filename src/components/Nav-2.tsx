import Link from "next/link";

export default function Nav2() {
    return(
        <section className="text-gray-900">
              <div className="container mx-auto flex items-center justify-around py-6">
                <ul className="flex space-x-6">
                    <li>
                       <Link href="/">
                       <span>About Us</span>
                       </Link> 
                    </li>
                    <li>
                    <Link href="/">
                      <span>Sell on Zitech</span>
                    </Link>
                    </li>
                    <li>
                      <Link href="/">
                      <span>Affiliate</span>
                   </Link>
                    </li> 
                </ul>
                
              </div>
            </section>
    )
}