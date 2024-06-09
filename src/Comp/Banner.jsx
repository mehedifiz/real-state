import { Link } from "react-router-dom";

import 'swiper/css';

import Swap from "./Swap";


const Banner = () => {
    return (
        <div className="hero min-h-[55vh] rounded-md " style={{backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1677048147913-0aa707014f31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D)'} } >
            <div className="hero-overlay bg-opacity-60 "></div>

  <div className="hero-content flex-col lg:flex-row-reverse justify-end ">
    <div className="w-1/2 rounded-lg">

        <Swap></Swap>

   
        
    </div>
    <div>
      <h1 className="text-5xl text-white font-bold">Urban Nest</h1>
      <p className="py-6 text-gray-200">Your Gateway to Premium Apartments. Discover Modern Living in the Heart of the City
</p>
      <Link to='/login' className="btn link px-14 bg-opacity-75">Login</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;