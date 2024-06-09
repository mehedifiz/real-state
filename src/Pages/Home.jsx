import { useLoaderData } from "react-router-dom";
import Eachestate from "../Comp/Eachestate";
import Banner from "../Comp/Banner";

const Home = () => {
    const data = useLoaderData();
  
    return (
        <div>
            <Banner></Banner>
<div className="grid md:grid-cols-2 grid-cols-1 mx-auto">
    
                {
                    data.map(estate => <Eachestate key={estate.id} estate={estate}></Eachestate>)
                }
</div>
        </div>
    );
};

export default Home;