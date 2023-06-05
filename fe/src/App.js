import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {AdminRoutes, GuestRoutes, UserRoutes, NormalRoutes } from "./routes/routes";
import Auth, {ROLE} from "./hooks/auth";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {NormalRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element}/>
                ))}
                {GuestRoutes.map((route, index) => (
                    <Route key={index} path={route.path}
                           element={<Auth role={ROLE.GUEST} path={'/'}>{route.element}</Auth>}/>
                ))}
                {UserRoutes.map((route, index) => (
                    <Route key={index} path={route.path}
                           element={<Auth role={ROLE.USER} path={"/login"}>{route.element}</Auth>}/>
                ))}
                {AdminRoutes.map((route, index) => (
                    <Route key={index} path={route.path}
                           element={<Auth role={ROLE.ADMIN} path={"/"}>{route.element}</Auth>}/>
                ))}

            </Routes>
        </BrowserRouter>
    );
}

export default App;
