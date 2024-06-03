/* eslint-disable react/no-unescaped-entities */
import chef from "../../../assets/restuarent/others/chef.png";
import deliveryMan1 from "../../../assets/restuarent/others/delivery-man-1.png";
import foodSafety from "../../../assets/restuarent/others/food-safety.png";
import serve from "../../../assets/restuarent/others/serve.png";

const WhatWeDo = () => {
    return (
        <div className="my-10">
            <h2 className="text-center text-yellow-600 font-bold text-xl uppercase mb-3">What We Do</h2>
            <h3 className="text-center text-7xl font-extrabold text-white">Great Taste Of Pizza <br />
                @Every Single Bite Time <br />
                To Explore Taste.</h3>

            <div className="flex items-center justify-center flex-row flex-wrap gap-10 mt-14">
                <div className="">
                    <div >
                        <img className="ml-14" src={deliveryMan1} alt="" />
                    </div>
                    <h4 className="text-center text-white text-2xl font-extrabold my-4">Free Delivery</h4>
                    <p>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit. </p>
                </div>

                <div>
                    <div>
                        <img className="ml-14" src={foodSafety} alt="" />
                    </div>
                    <h4 className="text-center text-white text-2xl font-extrabold my-4">100% Safe</h4>
                    <p>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                </div>

                <div>
                    <div className="mx-5">
                        <img className="ml-5" src={chef} alt="" />
                    </div>
                    <h4 className="text-center text-white text-2xl font-extrabold my-4">Professional Chef's</h4>
                    <p>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                </div>

                <div>
                    <div>
                        <img className="ml-8" src={serve} alt="" />
                    </div>
                    <h4 className="text-center text-white text-2xl font-extrabold my-4">Perfect Cooking</h4>
                    <p>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="my-5 text-center">
                <p className="btn my-5 rounded bg-[#ad1a19]">Book A Table</p>
            </div>
        </div>
    );
};

export default WhatWeDo;