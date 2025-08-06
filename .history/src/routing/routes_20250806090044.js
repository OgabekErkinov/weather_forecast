import { ErrorPage, Home, Settings } from "../pages";

export const customRoutes = [
    {
        routeElement : <Home/>,
        routePath : '/'
    },
    {
        routeElement : <Settings/>,
        routePath : '/settings'
    },
    {
        routeElement : <ErrorPage/>>
    }
]