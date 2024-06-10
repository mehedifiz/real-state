import { Link } from 'react-router-dom';
import Swap from './Swap';

const Banner = () => {
    return (
        <div
            className="hero min-h-[55vh] w-[80vw] bg-red-700  rounded-md bg-cover bg-center "
            style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1677048147913-0aa707014f31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D)' }}
        >
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="hero-content flex flex-col-reverse lg:flex-row-reverse  items-center p-4 lg:p-8">
                <div className="w-72 lg:w-[500px] rounded-lg mb-4 lg:mb-0">
                    <Swap />
                </div>
                <div className="text-center lg:text-left w-full lg:w-1/2">
                    <h1 className="text-3xl lg:text-5xl text-white font-bold">Urban Nest</h1>
                    <p className="py-4 lg:py-6 text-gray-200">
                        Your Gateway to Premium Apartments. Discover Modern Living in the Heart of the City.
                    </p>
                    <Link to='/login' className="btn link px-8 lg:px-14 bg-opacity-75">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
