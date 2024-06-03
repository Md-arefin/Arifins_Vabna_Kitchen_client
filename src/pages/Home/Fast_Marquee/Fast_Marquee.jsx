import Marquee from "react-fast-marquee";
import img1 from "../../../assets/restuarent/others/animator-img1.png";
import img2 from "../../../assets/restuarent/others/animator-img2.png";
import img3 from "../../../assets/restuarent/others/animator-img3.png";

const Fast_Marquee = () => {
    return (
        <Marquee className=" bg-red-600 cursor-grabbing " pauseOnHover={true}>
            <img src={img1} alt="" />
            <p className="font-extrabold text-5xl text-white px-5">Book A Table</p>
            <img src={img2} alt="" />
            <p className="font-extrabold text-5xl text-white px-5">Explore Food</p>
            <img src={img3} alt="" />
            <p className="font-extrabold text-5xl text-white px-5">Book An Event</p>

        </Marquee>
    );
};

export default Fast_Marquee;