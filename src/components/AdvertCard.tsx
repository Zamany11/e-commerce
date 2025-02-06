export default function AdvertCard () {
    return(
        <section className="bg-slate-100 pt-8 md:py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 container mx-auto bg-white rounded-md text-white text-xl md:text-3xl text-center">
                <div className="bg-orange-500 rounded-lg p-5 font-semi-bold">
                    Become A Seller With Just One Click, Earn Multiple Royalties
                    <div>
                    <button className="bg-red-600 hover:bg-red-700 font-bold text-orange-100 px-10 py-2 mt-5 rounded-lg">
                          Start Selling
                        </button>
                    </div>
                </div>
                <div className=" hidden md:grid bg-red-500 rounded-lg p-5 font-semi-bold">
                    Sign Up As Our Affiliate and Enjoy Huge Commissions
                    <div>
                    <button className="bg-orange-400 hover:bg-orange-500 font-bold text-red-600 px-10 py-2 mt-5 rounded-lg">
                          Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

