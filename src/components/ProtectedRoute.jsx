import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../store/authSlice";
function ProtectedRoute({ children }) {
    const isLoggedIn = useSelector(isLoggedInSelector());
    if (isLoggedIn) return <Navigate to={'/'}/>
    return children;
    // return (
    //     <Route
    //         {...rest}
    //         render={(props) => {
    //             if (!isLoggedIn) {
    //                 return (
    //                     <Redirect
    //                         to={{
    //                             pathname: "/auth/login",
    //                             state: {
    //                                 referrer: props.location,
    //                             },
    //                         }}
    //                     />
    //                 );
    //             }
    //             return Component ? <Component {...props} /> : children;
    //         }}
    //     />
    // );
}
export default ProtectedRoute;
