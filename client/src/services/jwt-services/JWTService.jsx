import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

const GetToken = () => {
    return localStorage.getItem("jwt-token");
};

const GetRole = () => {
    return localStorage.getItem("role");
}

const SetToken = (token) => {
    localStorage.setItem("jwt-token", token);
    const role = jwtDecode(token).Role;
    if (role){
        localStorage.setItem("role", role);
    }
};

const RemoveToken = () => {
    localStorage.removeItem("jwt-token");
};

const isAuthenticated = () => {
    const jwtToken = localStorage.getItem("jwt-token");
    if (!jwtToken) {
        return false;
    }
    try {
        const decodedToken = jwtDecode(jwtToken);
        return decodedToken.exp * 1000 > new Date().getTime();
    } catch (error) {
        return false;
    }
};

const ProtectedRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/auth/sign-in" />;
}

export { GetToken, SetToken, GetRole, RemoveToken, isAuthenticated, ProtectedRoute };