import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function SortMenu({ sort, setSort }) {
    return (
        <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel>Sort By</InputLabel>

            <Select value={sort} label="Sort By" onChange={(e) => setSort(e.target.value)}>
                <MenuItem value="none">Default</MenuItem>

                <MenuItem value="title">Title A-Z</MenuItem>
                
                <MenuItem value="genre">Genre A-Z</MenuItem>

                <MenuItem value="year">Newest Release</MenuItem>

                <MenuItem value="rating">Highest Rating</MenuItem>
            </Select>
        </FormControl>
    );
}

export default SortMenu;
