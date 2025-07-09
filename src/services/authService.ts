import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const API_BASE = import.meta.env.VITE_PORFOLIO_API

// Define the token storage key
const TOKEN_KEY = "accessToken";

type DecodedToken = {
    exp: number; // expiration time (UNIX timestamp in seconds)
};
const isTokenValid = (token: string): boolean => {
    try {
        if(!token) return false
        const decoded: DecodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000); // current time in seconds
        return decoded.exp > currentTime;
    } catch {
        return false;
    }
};
export const getToken = async (): Promise<string| null> => {
    try {
        const storedToken = localStorage.getItem(TOKEN_KEY);
        // ✅ If stored token exists and is still valid, return it
        if (storedToken && isTokenValid(storedToken)) {
            return storedToken;
        }
        // 🔐 Otherwise get a new token
        const { data } = await axios.get(`${API_BASE}/api/auth/portfolio-token`);

        const token = data.token;

        // 💾 Store token in localStorage
        localStorage.setItem(TOKEN_KEY, token);
        return data.token;
    } catch (error) {
       return null
    }

};

