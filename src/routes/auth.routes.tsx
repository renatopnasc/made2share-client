import { Auth } from "@/pages/auth";
import { Route, Routes } from "react-router-dom";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Auth/>}/>
        </Routes>
    )
}