import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = (props) => {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("myToken");

        if (token === undefined) {
            navigate("/");
        }
    }, [])

    return (<Component />)
}

export default ProtectedRoute;