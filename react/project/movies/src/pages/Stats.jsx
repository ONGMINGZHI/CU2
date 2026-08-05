import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
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

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
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

                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography>Watched</Typography>

                            <Typography variant="h5">{watched}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography>Watching</Typography>

                            <Typography variant="h5">{watching}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography>Plan To Watch</Typography>

                            <Typography variant="h5">{planToWatch}</Typography>
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
            </Grid>
        </Container>
    );
}

export default Stats;
