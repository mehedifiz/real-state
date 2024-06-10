import { useLoaderData } from "react-router-dom";
import Eachestate from "../Comp/Eachestate";
import Banner from "../Comp/Banner";


const Home = () => {
    const data = useLoaderData();

    return (
        <div className="flex flex-col items-center">
            <Banner />

          <div>
          <div className="grid  gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-4">
                {data.map(estate => (
                    <Eachestate key={estate.id} estate={estate} />
                ))}
            </div>
          </div>
          
        </div>
    );
};

export default Home;
