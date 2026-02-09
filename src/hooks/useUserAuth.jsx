import { useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPath";

export const useUserAuth = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!user || !token) {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        if (user) return;

        let isMounted = true;
        const fetchUserData = async () => {
            try {
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);
                if (isMounted && response.data) {
                    update
                }

            }, [])
}