import { useLoaderData, useParams } from "react-router-dom";

const Estate = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const estate = estates.find(estate => estate.id === id);

    if (!estate) {
        return <div className="container mx-auto p-4">Estate not found</div>;
    }

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-500 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src={estate.image} alt={estate.estate_title} className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                    <div className="space-y-2">
                        <h2 className="inline-block text-2xl font-semibold sm:text-3xl">{estate.estate_title}</h2>
                        <p className="text-xs dark:text-gray-600">Location: {estate.location}</p>
                        <p className="text-xs dark:text-gray-600">Price: {estate.price}</p>
                    </div>
                    <div className="dark:text-gray-800">
                        <p>{estate.description}</p>
                    </div>
                    <div className="dark:text-gray-800">
                        <h3 className="text-lg font-semibold">Facilities:</h3>
                        <ul className="list-disc ml-4">
                            {estate.facilities.map((facility, index) => (
                                <li className="list-none" key={index}>{facility}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="dark:text-gray-800">
                        <p><strong>Area:</strong> {estate.area}</p>
                        <p><strong>Status:</strong> {estate.status}</p>
                        <p><strong>Segment:</strong> {estate.segment_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;
