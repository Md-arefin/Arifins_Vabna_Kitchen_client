import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../../assets/restuarent/home/01.jpg';
import img2 from '../../../assets/restuarent/home/02.jpg';
import img3 from '../../../assets/restuarent/home/03.png';
import img4 from '../../../assets/restuarent/home/04.jpg';
import img5 from '../../../assets/restuarent/home/05.png';
import img6 from '../../../assets/restuarent/home/06.png';



const Banner = () => {
    return (
        <Carousel autoPlay={true} className=''>
            <div>
                <img src={img1} />
            </div>

            <div>
                <img src={img2} />
            </div>

            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
        </Carousel>

    );
};

export default Banner;