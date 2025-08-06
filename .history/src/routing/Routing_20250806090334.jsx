import { Route, Routes } from "react-router"
import { customRoutes } from "./routes"

export const Routing = () => {
    return (
        <Routes>
            {
                customRoutes?.map(( cRoute, idx ) => {
                    return (
                        <Route e/>
                    )
                })
            }
        </Routes>
    )
}