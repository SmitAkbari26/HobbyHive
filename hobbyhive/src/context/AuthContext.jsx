import { createContext, useContext, useState } from "react";
import Axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const csrf = () => Axios.get("/sanctum/csrf-cookie");

    const getUser = async () => {
        const { data } = await Axios.get("/api/user");
        setUser(data);
    };

    const login = async ({ ...data }) => {
        await csrf();
        setErrors({});
        try {
            await Axios.post("/login", data);
            await getUser();
            navigate("/");
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Validation errors
                setErrors(error.response.data.errors);
            } else {
                // Other errors
                console.error(JSON.stringify(error));
            }
        }
    };

    const register = async ({ ...data }) => {
        await csrf();
        setErrors({});
        try {
            await Axios.post("/register", data);
            setSuccessMessage(
                "Registration successful. Check your email for verification."
            );
            // await getUser();
            // navigate("/");
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Validation errors
                setErrors(error.response.data.errors);
            } else {
                // Other errors
                console.error(error);
            }
        }
    };

    const logout = async () => {
        Axios.post("/logout").then(() => {
            setUser(null);
        });
    };

    // useEffect(() => {
    //     if (!user) {
    //         getUser();
    //     }
    // }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                errors,
                successMessage,
                getUser,
                login,
                register,
                logout,
                csrf,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default function useAuthContext() {
    return useContext(AuthContext);
}
