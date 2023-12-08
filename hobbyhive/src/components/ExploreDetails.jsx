// ExploreDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../api/axios";
import UserList from "./UserList";

const ExploreDetail = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});
    const [selectedSubcategory, setSelectedSubcategory] = useState("");

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
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8 pt-2 leading-10 tracking-wider">
                    {detailData.title}
                </h1>
                <p className="text-gray-700">{detailData.description}</p>
                <div className="bg-white p-8 flex mt-4 rounded-lg shadow-md">
                    <div className="grid grid-cols-6 gap-4">
                        {Object.keys(detailData).length > 0 ? (
                            JSON.parse(detailData.subcategories).map(
                                (sub, index) => (
                                    <div
                                        key={index}
                                        className={`bg-gray-200 border-primary border-2 p-2 rounded-lg text-gray-700 shadow-md hover:border-accent cursor-pointer text-center ${
                                            selectedSubcategory === sub
                                                ? "bg-accent text-secondary"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setSelectedSubcategory(sub)
                                        }
                                    >
                                        {sub}
                                    </div>
                                )
                            )
                        ) : (
                            <div className="text-gray-500">Loading...</div>
                        )}
                    </div>
                </div>
                <div className="bg-white p-8 mt-4 rounded-lg shadow-md">
                    <UserList selectedSkill={selectedSubcategory} />
                </div>
            </div>
        </div>
    );
};

export default ExploreDetail;
