import { useQuery } from "@tanstack/react-query";
import LoadingWheel from "../Components/LoadingWheel";
import axiosInstance from "../api/axiosInstance";
import React, { useContext } from "react";
import DataContext from "../Utils/contexts/DataContext";

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

    if (isLoading) return <LoadingWheel />;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>API DATA</h1>
            <pre color="white">{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
};