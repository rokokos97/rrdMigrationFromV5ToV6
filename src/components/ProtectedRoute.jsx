import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../store/authSlice";
function ProtectedRoute({ children }) {
    const isLoggedIn = useSelector(isLoggedInSelector());
    const location = useLocation();
    if (!isLoggedIn) return <Navigate to={'/auth/login'} state={{ referrer: location}}/>
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
