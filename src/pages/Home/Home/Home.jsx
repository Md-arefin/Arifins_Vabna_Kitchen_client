import Banner from "../Banner/banner";
import Fast_Marquee from "../Fast_Marquee/Fast_Marquee";
import IconicMenu from "../IconicMenu/IconicMenu";
import MesmerizingTaste from "../MesmerizingTaste/MesmerizingTaste";
import ProfessionalTeam from "../ProfessionalTeam/ProfessionalTeam";
import Review from "../Review/Review";
import WhatWeDo from "../whatWeDo/whatWeDo";


const Home = () => {
    return (
    <div>
        <Banner />
        <Fast_Marquee />
        <WhatWeDo />
        <IconicMenu />
        <MesmerizingTaste />
        <ProfessionalTeam />
        <Review />
    </div>
    );
};

export default Home;