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

const ProtectedRoute = (necessaryRole = "Patient") => {
    const account_role = GetRole();
    const granted = necessaryRole.necessaryRole === account_role;
    console.log("account_role", account_role);
    console.log("necessaryRole", necessaryRole.necessaryRole);
    
    return isAuthenticated() && granted ? <Outlet /> : <Navigate to="/auth/dang-nhap" />;
}

export { GetToken, SetToken, GetRole, RemoveToken, isAuthenticated, ProtectedRoute };