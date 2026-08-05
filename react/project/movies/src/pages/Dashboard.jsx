import { useState } from "react";
import { Box, Button, Container, Grid, Typography, Paper, Snackbar } from "@mui/material";
import WatchlistCard from "../components/WatchlistCard";
import WatchlistDialog from "../components/WatchlistDialog";
import { useWatchlist } from "../context/WatchlistContext";
import FilterPanel from "../components/FilterPanel";
import SortMenu from "../components/SortMenu";

function Dashboard() {
    const { watchlist } = useWatchlist();

    const [filters, setFilters] = useState({
        type: "all",
        status: "all",
    });

    const filteredWatchlist = watchlist.filter((movie) => {
        const typeMatch = filters.type === "all" || movie.type === filters.type;

        const statusMatch = filters.status === "all" || movie.status === filters.status;

        return typeMatch && statusMatch;
    });

    const [sort, setSort] = useState("none");
    const sortedWatchlist = [...filteredWatchlist].sort((a, b) => {
        if (sort === "title") {
            return a.title.localeCompare(b.title);
        }

        if (sort === "year") {
            return Number(b.releaseYear) - Number(a.releaseYear);
        }

        if (sort === "rating") {
            return Number(b.rating || 0) - Number(a.rating || 0);
        }

        return 0;
    });

    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
    });

    const showSnackbar = (message) => {
        setSnackbar({
            open: true,
            message,
        });
    };

    const handleSnackbarClose = () => {
        setSnackbar({
            open: false,
            message: "",
        });
    };

    const handleOpen = () => {
        setSelectedItem(null);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = (movie) => {
        setSelectedItem(movie);
        setOpen(true);
    };

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 4,
                }}
            >
                <Typography variant="h4" fontWeight="bold">
                    Movie & Series Watchlist
                </Typography>

                <Button variant="contained" onClick={handleOpen}>
                    Add Title
                </Button>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    mb: 3,
                }}
            >
                <FilterPanel filters={filters} setFilters={setFilters} />

                <SortMenu sort={sort} setSort={setSort} />
            </Box>
            <WatchlistDialog open={open} onClose={handleClose} editItem={selectedItem} showSnackbar={showSnackbar} />
            {filteredWatchlist.length === 0 ? (
                <Paper
                    elevation={2}
                    sx={{
                        p: 4,
                        textAlign: "center",
                        mt: 3,
                    }}
                >
                    <Typography variant="h6">No movies or series found</Typography>

                    <Typography color="text.secondary">Try changing your filters or add a new title.</Typography>
                </Paper>
            ) : (
                <Grid container spacing={3}>
                    {sortedWatchlist.map((movie) => (
                        //To show the watchlist-READ
                        <Grid key={movie.id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <WatchlistCard movie={movie} onEdit={handleEdit} showSnackbar={showSnackbar} />
                        </Grid>
                    ))}
                </Grid>
            )}
            <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleSnackbarClose} message={snackbar.message} />
        </Container>
    );
}

export default Dashboard;
