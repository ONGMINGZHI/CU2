import { FormControl, InputLabel, Select, MenuItem, Stack } from "@mui/material";

function FilterPanel({ filters, setFilters }) {
    return (
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <FormControl size="small">
                <InputLabel>Type</InputLabel>

                <Select
                    value={filters.type}
                    label="Type"
                    onChange={(e) =>
                        setFilters({
                            ...filters,
                            type: e.target.value,
                        })
                    }
                >
                    <MenuItem value="all">All</MenuItem>

                    <MenuItem value="movie">Movie</MenuItem>

                    <MenuItem value="series">Series</MenuItem>
                </Select>
            </FormControl>

            <FormControl size="small">
                <InputLabel>Status</InputLabel>

                <Select
                    value={filters.status}
                    label="Status"
                    onChange={(e) =>
                        setFilters({
                            ...filters,
                            status: e.target.value,
                        })
                    }
                >
                    <MenuItem value="all">All</MenuItem>

                    <MenuItem value="Watching">Watching</MenuItem>

                    <MenuItem value="Watched">Watched</MenuItem>

                    <MenuItem value="Plan to Watch">Plan to Watch</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    );
}

export default FilterPanel;
