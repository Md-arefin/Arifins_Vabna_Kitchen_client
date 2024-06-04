import { Link } from "react-router-dom";
import img from "../../assets/restuarent/404.gif";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center mt-10">
                <img className="w-1/3 rounded" src={img} alt="" />
            </div>
            <div className="text-center">
                <Link to='/' className="btn my-5 rounded bg-[#ad1a19]">Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;