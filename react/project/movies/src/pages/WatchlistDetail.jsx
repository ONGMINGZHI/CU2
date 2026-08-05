import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Container, Typography, Card, CardContent, Button, TextField, Stack, Divider, Snackbar, Paper, Alert } from "@mui/material";
import { useWatchlist } from "../context/WatchlistContext";

function WatchlistDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { watchlist, updateTitle } = useWatchlist();

    const movie = watchlist.find((item) => item.id === id);
    const [review, setReview] = useState("");
    const [watchedOn, setWatchedOn] = useState("");
    useEffect(() => {
        if (movie) {
            setReview(movie.review || "");
            setWatchedOn(movie.watchedOn || "");
        }
    }, [movie]);
    const handleSaveReview = () => {
        if (watchedOn) {
            const selectedDate = new Date(watchedOn);
            const today = new Date();
            const releaseDate = new Date(`${movie.releaseYear}-01-01`);

            if (selectedDate > today) {
                setSnackbar({
                    open: true,
                    message: "Even Doctor Strange can't watch movies from the future. ⏳",
                    severity: "error",
                });
                return;
            }

            if (selectedDate < releaseDate) {
                setSnackbar({
                    open: true,
                    message: "Unless you own a time machine, that's not possible! 🕰️",
                    severity: "error",
                });
                return;
            }
        }

        updateTitle({
            ...movie,
            review,
            watchedOn,
        });

        setSnackbar({
            open: true,
            message: "Review saved successfully!",
            severity: "success",
        });
    };

    if (!movie) {
        return (
            <Container>
                <Typography>Title not found.</Typography>

                <Button onClick={() => navigate("/")}>Back</Button>
            </Container>
        );
    }
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });
    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Card>
                    <CardContent>
                        <Typography variant="h4">{movie.title}</Typography>

                        <Typography>Type: {movie.type}</Typography>

                        <Typography>Genre: {movie.genre || "Not specified"}</Typography>

                        <Typography>Release Year: {movie.releaseYear}</Typography>

                        <Typography>Status: {movie.status}</Typography>

                        <Typography>Rating: {movie.rating || "Not rated"}/10</Typography>

                        <Divider sx={{ my: 3 }} />
                        <Stack spacing={2} sx={{ mt: 3 }}>
                            <Typography variant="h6">Personal Review</Typography>
                            {/* if no put review yet */}
                            {!movie.review && !review && (
                                <Typography color="text.secondary" sx={{ fontStyle: "italic" }}>
                                    No review yet. Share your thoughts below.
                                </Typography>
                            )}

                            <TextField multiline rows={5} fullWidth placeholder="Write your thoughts about this title..." value={review} onChange={(e) => setReview(e.target.value)} inputProps={{ maxLength: 500 }} helperText={`${review.length}/500 characters`} />

                            <Stack spacing={1}>
                                <Typography variant="body2" fontWeight={500}>
                                    Watched On
                                </Typography>

                                <TextField
                                    type="date"
                                    value={watchedOn}
                                    onChange={(e) => setWatchedOn(e.target.value)}
                                    fullWidth
                                    inputProps={{
                                        min: `${movie.releaseYear}-01-01`,
                                        max: new Date().toISOString().split("T")[0],
                                    }}
                                />
                            </Stack>

                            <Button variant="contained" onClick={handleSaveReview} disabled={review === (movie.review || "") && watchedOn === (movie.watchedOn || "")}>
                                Save Review
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>

                <Button sx={{ mt: 2 }} onClick={() => navigate("/")}>
                    Back to Dashboard
                </Button>
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={3000}
                    onClose={() =>
                        setSnackbar((prev) => ({
                            ...prev,
                            open: false,
                        }))
                    }
                >
                    <Alert
                        severity={snackbar.severity}
                        variant="filled"
                        sx={{ width: "100%" }}
                        onClose={() =>
                            setSnackbar((prev) => ({
                                ...prev,
                                open: false,
                            }))
                        }
                    >
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Container>
        </>
    );
}

export default WatchlistDetail;
