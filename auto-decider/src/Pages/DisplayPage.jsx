import { useQuery } from "@tanstack/react-query";
import LoadingWheel from "../Components/LoadingWheel";
import axiosInstance from "../api/axiosInstance";

const fetchData = async () => {
    const { data } = await axiosInstance.get();
    return data;
};

const DisplayPage = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["Vehicle Makes Sold in the US"],
        queryFn: fetchData
    });

    if (isLoading) return <LoadingWheel />;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>API DATA</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
};

export default DisplayPage;