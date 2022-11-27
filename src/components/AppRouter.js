import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {MAINPAGE} from "../utils/consts";
import {routeList} from "../routes";

const AppRouter = () => {
    return (
        <>
            <Routes>
                {
                    routeList.map(({path, component}) => (
                        <Route key={path} path={path} element={component} exact/>
                    ))
                }
                <Route path='*' element={<Navigate to={MAINPAGE} />} />
            </Routes>
        </>
    );
};

export default AppRouter;