import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import LandingPage from "./pages/landing_page";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                {/* gunakan RouterDash untuk semua rute dashboard */}
                
            </Routes>
        </Router>
    )
}

export default AppRouter