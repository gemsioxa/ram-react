import {LOCATION, MAINPAGE} from "./utils/consts";
import Display from "./components/Display";
import LocationPage from "./components/LocationPage";

export const routeList = [
    {
        path: MAINPAGE,
        component: <Display/>
    },
    {
        path: LOCATION + '/:id',
        component: <LocationPage/>,
    }
]