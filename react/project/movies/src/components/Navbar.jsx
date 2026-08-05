import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router";


function Navbar() {

    return (

        <AppBar 
            position="static"
            elevation={2}
        >

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

                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                    >
                        Dashboard
                    </Button>


                    <Button
                        color="inherit"
                        component={Link}
                        to="/stats"
                    >
                        Stats
                    </Button>

                </Box>


            </Toolbar>

        </AppBar>

    );
}


export default Navbar;