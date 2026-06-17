const Footer=()=>{
    return <div className="font-semibold">
        <div className="text-gray-800 font-semibold px-3 py-6 bg-mist-300 mt-10 flex flex-col flex-wrap" id="subscribe">
            
            <div className="flex justify-center md:justify-between lg:justify-between xl:justify-between items-center flex-wrap">
                
                <div className="text-center mt-2">
                    <h1 className="text-3xl capitalize text-[#5C766D]">
                        Medicare-<span className="text-pink-800">Hospital</span>
                    </h1>
                    <p className="text-xl text-gray-800 capitalize">
                        quality healthcare for everyone
                    </p>
                </div>

                <div className="mt-2 text-center capitalize flex justify-center items-center">
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="text-3xl text-[#5C766D]">
                            patient care
                        </h1>
                        <p className="text-center">24/7 medical support</p>
                    </div>
                </div>

                <div className="mt-2 capitalize text-center">
                    <h1 className="text-3xl text-[#5C766D]">
                        healthcare services
                    </h1>
                    <p className="text-center">experienced doctors</p>
                    <p className="text-center">advanced treatment</p>
                </div>

            </div>

            <hr className="mt-5"/>

            <div className="flex justify-center items-center">
                <h1 className="text-center mt-2 text-[#5C766D] capitalize text-sm">
                    © 2026 Medicare Hospital. All rights reserved.
                </h1>
            </div>

        </div>
    </div>
}

export default Footer;