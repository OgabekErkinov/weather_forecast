import { Routes } from "react-router"
import { customRoutes } from "./routes"

export const Routing = () => {
    return (
        <Routes>
            {
                customRoutes
            }
        </Routes>
    )
}