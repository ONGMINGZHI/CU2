import React, { useState } from "react";

function Controls({ onSortChange, onFilterChange, onMinRatingChange, onExport, onImport }) {
    const [sort, setSort] = useState("Created (newest first)");
    const [watchedFilter, setWatchedFilter] = useState("All");
    const [minRating, setMinRating] = useState(0);

    const handleSortChange = (e) => {
        const val = e.target.value;
        setSort(val);
        if (onSortChange) onSortChange(val);
    };

    const handleWatchedChange = (val) => {
        setWatchedFilter(val);
        if (onFilterChange) onFilterChange(val);
    };

    const handleRatingChange = (e) => {
        const val = Number(e.target.value);
        setMinRating(val);
        if (onMinRatingChange) onMinRatingChange(val);
    };

    return (
        <div className="card p-4 mb-4 shadow-sm border rounded bg-white">
            <h5 className="text-secondary mb-3 fs-6 fw-bold">Controls</h5>

            <div className="row align-items-center mb-4 g-3">
                <div className="col-auto">
                    <div className="border rounded p-2 position-relative bg-white" style={{ minWidth: "210px" }}>
                        <label className="position-absolute bg-white px-1 text-muted" style={{ top: "-10px", left: "10px", fontSize: "0.75rem" }}>
                            Sort
                        </label>
                        <select className="form-select border-0 shadow-none p-0 pe-4" value={sort} onChange={handleSortChange} style={{ cursor: "pointer", fontSize: "0.95rem" }}>
                            <option value="Created (newest first)">Created (newest first)</option>
                            <option value="Created (oldest first)">Created (oldest first)</option>
                            <option value="Rating (highest first)">Rating (highest first)</option>
                            <option value="Rating (lowest first)">Rating (lowest first)</option>
                        </select>
                    </div>
                </div>

                <div className="col-auto ms-md-3">
                    <span className="text-secondary me-3 fw-medium">Watched</span>
                    {["All", "Watched", "Unwatched"].map((option) => (
                        <div className="form-check form-check-inline" key={option}>
                            <input className="form-check-input" type="radio" name="watchedOptions" id={`watched-${option}`} value={option} checked={watchedFilter === option} onChange={() => handleWatchedChange(option)} style={{ cursor: "pointer" }} />
                            <label className="form-check-label" htmlFor={`watched-${option}`} style={{ cursor: "pointer" }}>
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-4" style={{ maxWidth: "320px" }}>
                <label className="form-label text-dark fw-medium mb-1">Minimum Rating: {minRating === 0 ? " All " : minRating}</label>

                <input type="range" className="form-control-range m-2 " min="0" max="5" step="1" value={minRating} onChange={handleRatingChange} />

                {/* <div className="d-flex justify-content-between px-1 mt-1">
                    {[0, 1, 2, 3, 4, 5].map((dot) => (
                        <span
                            key={dot}
                            style={{
                                height: "6px",
                                width: "6px",
                                backgroundColor: "#0d6efd",
                                borderRadius: "50%",
                                display: "inline-block",
                            }}
                        />
                    ))}
                </div> */}

                {/* <div className="d-flex justify-content-between text-muted small mt-1" style={{ fontSize: "0.75rem" }}>
                    <span>All</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div> */}
            </div>

            <div className="d-flex gap-2">
                <button type="button" className="btn btn-outline-primary text-uppercase fw-semibold btn-sm px-3" onClick={onExport}>
                    ⬇ Export JSON
                </button>
                <button type="button" className="btn btn-outline-primary text-uppercase fw-semibold btn-sm px-3" onClick={onImport}>
                    ⬆ Import JSON
                </button>
            </div>
        </div>
    );
}

export default Controls;
