import React, { useEffect } from "react";
import useAuthContext from "../context/AuthContext";

const Home = () => {
    const { user, getUser } = useAuthContext();

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, []);
    return <></>;
};

export default Home;
