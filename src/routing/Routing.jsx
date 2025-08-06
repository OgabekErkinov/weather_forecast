import { Route, Routes } from "react-router"
import { customRoutes } from "./routes"

const Routing = () => {
    return (
        <Routes>
            {
                customRoutes?.map(( cRoute, idx ) => {
                    return (
                        <Route element={cRoute?.routeElement} path={cRoute?.routePath} key={idx}/>
                    )
                })
            }
        </Routes>
    )
}

export default Routing