import { useQuery } from "@tanstack/react-query";
import LoadingWheel from "../Components/LoadingWheel";
import axiosInstance from "../api/axiosInstance";
import { useContext } from "react";
import DataContext from "../Utils/contexts/DataContext";
import { DisplayCard } from "../Components/DisplayCard";

const fetchData = async () => {
    const { data } = await axiosInstance.get('trending/anime')
        .then(response => {
            // Remove the callback function from the response
            return response.data;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            throw new Error("Failed to fetch data");
        });
    return data;
};

export function DisplayPage() {
    const { formData } = useContext(DataContext);
    console.log(formData);

    const { data, error, isLoading } = useQuery({
        queryKey: ["Vehicle Makes Sold in the US"],
        queryFn: fetchData
    });

    console.log("Data fetched:", data);

    if (isLoading) return <LoadingWheel />;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1 color="white">API DATA</h1>
            <div className="display-cards-container">
                {data.map((item, index) => (
                    <DisplayCard
                        key={index}
                        title={item.attributes.canonicalTitle || `Item ${index + 1}`}
                        imageUrl={item.attributes.posterImage.small || "https://via.placeholder.com/150"}
                        description={item.attributes.synopsis || "No description available."}
                        onClick={() => console.log(`Clicked on ${item.attributes.canonicalTitle}`)}
                    />
                ))}
            </div>
        </div>
    )
};