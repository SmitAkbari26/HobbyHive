import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../api/axios";

const ExploreDetail = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        Axios.get(`/explore/${id}`)
            .then((response) => {
                setDetailData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching Explore detail:", error);
            });
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-100 font-roboto tracking-wider">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 pt-2 leading-9 tracking-wider">
                    {detailData.title}
                </h1>
                <p className="text-gray-600">{detailData.description}</p>
                {/* <div>
                    <h2>Subcategories:</h2>
                    <ul>
                        {detailData.subcategories.map((subcategory, index) => (
                            <li key={index}>{subcategory}</li>
                        ))}
                    </ul>
                </div> */}
                {/* Add more details as needed */}
            </div>
        </div>
    );
};

export default ExploreDetail;
