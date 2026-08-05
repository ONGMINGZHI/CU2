import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Stack, Rating, Typography } from "@mui/material";
import { useWatchlist } from "../context/WatchlistContext";
import { validateWatchlist } from "../utils/validation";

const initialFormData = {
    title: "",
    type: "movie",
    genre: "Action",
    releaseYear: "",
    status: "Plan to Watch",
    rating: "",
    season: "",
    episode: "",
};

function WatchlistDialog({ open, onClose, editItem, showSnackbar }) {
    const { addTitle, updateTitle } = useWatchlist();

    const [formData, setFormData] = useState(initialFormData);

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,

            ...(name === "type" && value === "movie"
                ? {
                      season: "",
                      episode: "",
                  }
                : {}),
        }));
    };
    const resetForm = () => {
        setFormData(initialFormData);
        setErrors({});
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };
    useEffect(() => {
        if (editItem) {
            setFormData(structuredClone(editItem)); //Deep Copy,(Edits that are made in the clone won't change the data in editItem)
        } else {
            setFormData(initialFormData);
            setErrors({});
        }
    }, [editItem]);

    const handleSave = () => {
        const validationErrors = validateWatchlist(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if (isEditMode) {
            updateTitle(formData);
            //Update here if is editMode

            showSnackbar("Title updated successfully");
        } else {
            addTitle({
                id: crypto.randomUUID(),
                ...formData,
            });

            showSnackbar("Title added successfully");
        }

        handleClose();
    };

    const isEditMode = Boolean(editItem);

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>{isEditMode ? "Edit Title" : "Add Title"}</DialogTitle>
            <DialogContent>
                <Stack spacing={2} mt={1}>
                    <TextField label="Title" name="title" value={formData.title} onChange={handleChange} error={!!errors.title} helperText={errors.title} fullWidth />

                    <TextField select label="Type" name="type" value={formData.type} onChange={handleChange} fullWidth>
                        <MenuItem value="movie">Movie</MenuItem>

                        <MenuItem value="series">Series</MenuItem>
                    </TextField>

                    <TextField select label="Genre" name="genre" value={formData.genre} onChange={handleChange} fullWidth>
                        <MenuItem value="Action">Action</MenuItem>
                        <MenuItem value="Adventure">Adventure</MenuItem>
                        <MenuItem value="Animation">Animation</MenuItem>
                        <MenuItem value="Comedy">Comedy</MenuItem>
                        <MenuItem value="Crime">Crime</MenuItem>
                        <MenuItem value="Drama">Drama</MenuItem>
                        <MenuItem value="Fantasy">Fantasy</MenuItem>
                        <MenuItem value="Horror">Horror</MenuItem>
                        <MenuItem value="Mystery">Mystery</MenuItem>
                        <MenuItem value="Romance">Romance</MenuItem>
                        <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
                        <MenuItem value="Thriller">Thriller</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                    </TextField>
                    <TextField label="Release Year" name="releaseYear" value={formData.releaseYear} onChange={handleChange} error={!!errors.releaseYear} helperText={errors.releaseYear} fullWidth />

                    <TextField select label="Status" name="status" value={formData.status} onChange={handleChange} fullWidth>
                        <MenuItem value="Plan to Watch">Plan To Watch</MenuItem>

                        <MenuItem value="Watching">Watching</MenuItem>

                        <MenuItem value="Watched">Watched</MenuItem>
                    </TextField>

                    <Stack spacing={1}>
                        <Typography>Rating</Typography>

                        <Rating
                            name="rating"
                            value={Number(formData.rating)}
                            max={10}
                            onChange={(event, newValue) => {
                                setFormData((prev) => ({
                                    ...prev,
                                    rating: newValue,
                                }));
                            }}
                        />

                        {errors.rating && <Typography color="error">{errors.rating}</Typography>}
                    </Stack>

                    {formData.type === "series" && (
                        <>
                            <TextField label="Season" name="season" value={formData.season} onChange={handleChange} error={!!errors.season} helperText={errors.season} fullWidth />

                            <TextField label="Episode" name="episode" value={formData.episode} onChange={handleChange} error={!!errors.episode} helperText={errors.episode} fullWidth />
                        </>
                    )}
                </Stack>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant="contained" onClick={handleSave}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default WatchlistDialog;
