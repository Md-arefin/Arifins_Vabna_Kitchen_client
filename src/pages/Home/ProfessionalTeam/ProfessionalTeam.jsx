import img1 from "../../../assets/restuarent/others/Demo-1-Team-Image-1.jpg";
import img2 from "../../../assets/restuarent/others/Demo-1-Team-Image-2.jpg";
import img3 from "../../../assets/restuarent/others/Demo-1-Team-Image-3.jpg";

const ProfessionalTeam = () => {
    return (
        <div className="my-10 ml-10">
            <div className='mb-10 '>
                <h2 className="text-left text-yellow-600 font-bold text-xl uppercase mb-3">Professional Team
                </h2>
                <h3 className="text-left text-4xl font-bold text-white">Meet Our Kitchen Kings</h3>
            </div>

            <div className="flex flex-row flex-wrap gap-10">
                <div  className="w-1/4">
                    <img className="rounded border-2 border-white " src={img1} alt="" />
                    <div className="mt-5">
                        <p className="text-center text-yellow-600  text-xl mb-1">Master Chef</p>
                        <p className="text-center text-white  text-2xl font-bold">Leisl Kiki</p>
                    </div>
                </div>
                <div className="w-1/4">
                    <img className="rounded border-2 border-white " src={img2} alt="" />
                    <div className="mt-5">
                        <p className="text-center text-yellow-600  text-xl mb-1">Executive Chef</p>
                        <p className="text-center text-white  text-2xl font-bold">Sam Adams</p>
                    </div>
                </div>
                <div className="w-1/4">
                    <img className="rounded border-2 border-white " src={img3} alt="" />

                    <div className="mt-5">
                        <p className="text-center text-yellow-600  text-xl mb-1">Chief Chef</p>
                        <p className="text-center text-white  text-2xl font-bold">Christopher</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfessionalTeam;