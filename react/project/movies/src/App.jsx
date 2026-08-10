import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import WatchlistDetail from "./pages/WatchlistDetail";
import Stats from "./pages/Stats";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/watchlist/:id" element={<WatchlistDetail />} />
                    <Route path="/stats" element={<Stats />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
