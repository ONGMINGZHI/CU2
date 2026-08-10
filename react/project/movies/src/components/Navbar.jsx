import { AppBar, Toolbar, Typography, Button, Box, Switch } from "@mui/material";
import { Link } from "react-router";

function Navbar({ darkMode, setDarkMode }) {
    return (
        <AppBar position="static" elevation={2}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        textDecoration: "none",
                        color: "inherit",
                        fontWeight: "bold",
                    }}
                >
                    🎬 Watchlist
                </Typography>

                {/* Navigation Links */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                    }}
                >
                    <Button color="inherit" component={Link} to="/">
                        Dashboard
                    </Button>

                    <Button color="inherit" component={Link} to="/stats">
                        Stats
                    </Button>
                    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
