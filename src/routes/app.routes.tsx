import { Home } from "@/pages/app/home";
import { Route, Routes } from "react-router-dom";

export function AppRoutes() {
    return <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
}