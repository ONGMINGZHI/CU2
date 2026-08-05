import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import WatchlistDetail from "./pages/WatchlistDetail";
import Stats from "./pages/Stats";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/watchlist/:id" element={<WatchlistDetail />} />
                <Route path="/stats" element={<Stats />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
