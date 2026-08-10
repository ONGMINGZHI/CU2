import { useState } from "react";
import { Card, CardContent, CardActions, Typography, Button, Stack, Dialog, DialogTitle, DialogContent, DialogActions, Chip, Box } from "@mui/material";
import { useWatchlist } from "../context/WatchlistContext";
import { Link } from "react-router";

function WatchlistCard({ movie, onEdit, showSnackbar }) {
    //use props from-Dashboard177
    const [confirmOpen, setConfirmOpen] = useState(false);
    const { deleteTitle } = useWatchlist();

    const handleDelete = () => {
        deleteTitle(movie.id);
        setConfirmOpen(false);
        showSnackbar("Title deleted successfully");
    };

    return (
        <>
            <Card
                sx={{
                    height: "100%",
                    borderRadius: 3,
                    transition: "0.3s",

                    "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 6,
                    },
                }}
            >
                <CardContent>
                    <Stack spacing={1.5}>
                        <Typography variant="h6" fontWeight="bold">
                            {movie.title}
                        </Typography>

                        <Typography color="text.secondary">{movie.type === "movie" ? "🎬 Movie" : "📺 Series"}</Typography>

                        <Typography color="text.secondary">Genre: {movie.genre || "Not specified"}</Typography>

                        <Typography color="text.secondary">Release Year: {movie.releaseYear || "Unknown"}</Typography>

                        <Box>
                            <Chip label={movie.status} color={movie.status === "Watched" ? "success" : movie.status === "Watching" ? "warning" : "default"} />
                        </Box>

                        <Typography>⭐ Rating: {movie.rating || "Not rated"}/10</Typography>

                        {movie.type === "series" && (
                            <Typography>
                                Season {movie.season || "-"} | Episode {movie.episode || "-"}
                            </Typography>
                        )}
                    </Stack>
                </CardContent>

                <CardActions>
                    <Button size="small" component={Link} to={`/watchlist/${movie.id}`}>
                        Details
                    </Button>

                    <Button size="small" onClick={() => onEdit(movie)}>
                        Edit {/* handleEdit(movie)-Dashboard76  */}
                    </Button>

                    <Button size="small" color="error" onClick={() => setConfirmOpen(true)}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
            <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
                <DialogTitle>Delete Title?</DialogTitle>

                <DialogContent>
                    <Typography>Are you sure you want to delete "{movie.title}"?</Typography>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>

                    <Button color="error" variant="contained" onClick={handleDelete}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default WatchlistCard;
