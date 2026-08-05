export const validateWatchlist = (formData) => {
    const errors = {};

    if (!formData.title.trim()) {
        errors.title = "Title is required.";
    }

    if (!/^\d{4}$/.test(formData.releaseYear)) {
        errors.releaseYear = "Release year must be 4 digits.";
    } else {
        const year = Number(formData.releaseYear);

        if (year < 1888 || year > new Date().getFullYear() + 1) {
            errors.releaseYear = "Invalid release year.";
        }
    }

    const rating = Number(formData.rating);

    if (formData.rating && (rating < 1 || rating > 10)) {
        errors.rating = "Rating must be between 1 and 10.";
    }

    if (formData.type === "series" && !formData.season) {
        errors.season = "Season is required for series.";
    }
    if (formData.type === "series") {
        const season = Number(formData.season);
        const episode = Number(formData.episode);

        if (!formData.season) {
            errors.season = "Season is required.";
        } else if (!Number.isInteger(season) || season < 1) {
            errors.season = "Season must be a positive whole number.";
        }

        if (!formData.episode) {
            errors.episode = "Episode is required.";
        } else if (!Number.isInteger(episode) || episode < 1) {
            errors.episode = "Episode must be a positive whole number.";
        }
    }

    return errors;
};
