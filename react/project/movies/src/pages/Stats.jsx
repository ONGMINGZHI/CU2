import { Box, Card, CardContent, Chip, Container, Divider, Grid, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useWatchlist } from "../context/WatchlistContext";

function Stats() {
    const { watchlist } = useWatchlist();

    const totalTitles = watchlist.length;

    const movies = watchlist.filter((item) => item.type === "movie").length;

    const series = watchlist.filter((item) => item.type === "series").length;

    const watched = watchlist.filter((item) => item.status === "Watched").length;

    const watching = watchlist.filter((item) => item.status === "Watching").length;

    const planToWatch = watchlist.filter((item) => item.status === "Plan to Watch").length;

    const ratings = watchlist.filter((item) => item.rating).map((item) => Number(item.rating));

    const averageRating = ratings.length > 0 ? (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(1) : "N/A";

    const reviewCount = watchlist.filter((item) => item.review?.trim()).length;

    const topRated = [...watchlist].filter((item) => item.rating).sort((a, b) => b.rating - a.rating)[0];

    const genreCounts = {};

    watchlist.forEach((item) => {
        genreCounts[item.genre] = (genreCounts[item.genre] || 0) + 1;
    });

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mt: 2, pb: 2 }} fontWeight="bold">
                Watchlist Statistics
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography>Total Titles</Typography>

                            <Typography variant="h5">{totalTitles}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography>Movies</Typography>

                            <Typography variant="h5">{movies}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography>Series</Typography>

                            <Typography variant="h5">{series}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography>Average Rating</Typography>

                            <Typography variant="h5">{averageRating}/10</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography>Reviews</Typography>

                            <Typography variant="h5">{reviewCount}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Divider sx={{ my: 5 }} />

            <Typography variant="h5" mb={3}>
                Status Overview
            </Typography>

            <Stack direction="row" spacing={2} flexWrap="wrap">
                <Grid container spacing={2}>
                    <Chip color="success" label={`Watched (${watched})`} />

                    <Chip color="warning" label={`Watching (${watching})`} />

                    <Chip color="default" label={`Plan To Watch (${planToWatch})`} />
                </Grid>
            </Stack>

            <Divider sx={{ my: 5 }} />

            <Typography variant="h5" mb={2}>
                Genre
            </Typography>
            {Object.entries(genreCounts).map(([genre, count]) => (
                <Paper
                    key={genre}
                    sx={{
                        p: 2,
                        mb: 2,
                    }}
                >
                    <Stack direction="row" justifyContent="space-between">
                        <Typography>{genre}</Typography>

                        <Typography fontWeight="bold"> ( {count} )</Typography>
                    </Stack>

                    <LinearProgress
                        variant="determinate"
                        value={(count / watchlist.length) * 100}
                        sx={{
                            mt: 1,
                            height: 10,
                            borderRadius: 5,
                        }}
                    />
                </Paper>
            ))}
            <Divider sx={{ my: 5 }} />

            <Card>
                <CardContent>
                    <Stack spacing={1} alignItems="center">
                        <EmojiEventsIcon color="warning" sx={{ fontSize: 50 }} />

                        <Typography variant="h5">Top Rated</Typography>

                        <Typography variant="h4">{topRated?.title ?? "No ratings yet"}</Typography>

                        <Typography>⭐ {topRated?.rating ?? "-"} / 10</Typography>
                    </Stack>
                </CardContent>
            </Card>
            <Divider sx={{ my: 5 }} />
        </Container>
    );
}

export default Stats;
