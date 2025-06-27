import { useQuery } from "@tanstack/react-query";
import LoadingWheel from "../Components/LoadingWheel";
import axiosInstance from "../api/axiosInstance";
import { useContext, useState } from "react";
import DataContext from "../Utils/contexts/DataContext";
import { DisplayCard } from "../Components/DisplayCard";

const animeTypes = Object.freeze({
    TRENDING: { val: "trending/anime", type: '' },
    TV: { val: "/anime?page[limit]=20", type: "TV" },
    MOVIE: { val: "/anime?page[limit]=20&page[offset]=20", type: "movie" },
    OVA: { val: "/anime?page[limit]=20&page[offset]=100", type: "OVA" },
    SPECIAL: { val: "/anime?page[limit]=20&page[offset]=1200", type: "special" },
    TV_SHORT: "tv_short",
    WEB: "web",
    MUSIC: "/anime"
})

const fetchData = async (val) => {
    const { data } = await axiosInstance.get(val || animeTypes.TRENDING.val)
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

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');

    const {
        data,
        isPending,
        error,
    } = useQuery({
        queryKey: ["animeData", searchTerm],
        queryFn: () => fetchData(searchTerm),
    });

    console.log("Data fetched:", data);

    return (
        <div>
            <h1 color="white">Anime Data</h1>
            <div className="tab-container">
                <button className="tab-button" onClick={() => {
                    setSearchTerm(animeTypes.TRENDING.val);
                    setSelectedType(animeTypes.TRENDING.type);
                }}>
                    Trending Anime
                </button>
                <button className="tab-button" onClick={() => {
                    setSearchTerm(animeTypes.TV.val);
                    setSelectedType(animeTypes.TV.type);
                }}>
                    TV Anime
                </button>
                <button className="tab-button" onClick={() => {
                    setSearchTerm(animeTypes.MOVIE.val);
                    setSelectedType(animeTypes.MOVIE.type);
                }}>
                    Anime Movies
                </button>
                <button className="tab-button" onClick={() => {
                    setSearchTerm(animeTypes.SPECIAL.val);
                    setSelectedType(animeTypes.SPECIAL.type);
                }}>
                    Specials
                </button>
                <button className="tab-button" onClick={() => {
                    setSearchTerm(animeTypes.OVA.val);
                    setSelectedType(animeTypes.OVA.type);
                }}>
                    OVA
                </button>
            </div>
            {isPending && (
                <LoadingWheel />
            )}
            {error && (
                <p>Error: {error.message}</p>
            )}
            <div className="display-cards-container">
                {data && (
                    selectedType === '' ? (
                        data.map((item) => (
                            <DisplayCard
                                key={item.id}
                                title={item.attributes.canonicalTitle}
                                imageUrl={item.attributes.posterImage.small}
                                description={item.attributes.synopsis}
                                onClick={() => console.log(`Clicked on ${item.attributes.canonicalTitle}`)}
                            />
                        ))
                    ) : (
                        data.filter(item => item.attributes.showType === selectedType).map((item) => (
                            <DisplayCard
                                key={item.id}
                                title={item.attributes.canonicalTitle}
                                imageUrl={item.attributes.posterImage.small}
                                description={item.attributes.synopsis}
                                onClick={() => console.log(`Clicked on ${item.attributes.canonicalTitle}`)}
                            />
                        )
                        ))
                )}
            </div>
        </div>
    )
};