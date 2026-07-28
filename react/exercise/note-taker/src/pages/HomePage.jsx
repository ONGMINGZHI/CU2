import React, { useState } from "react";
import { Link } from "react-router";

const HomePage = ({ notes = [], onDeleteNote, categories = [] }) => {
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [sortBy, setSortBy] = useState("Last Updated");

    const filteredNotes = notes.filter((note) => {
        if (selectedCategory === "All Categories") return true;
        return note.category === selectedCategory;
    });

    const sortedNotes = [...filteredNotes].sort((a, b) => {
        if (sortBy === "Title") {
            return a.title.localeCompare(b.title);
        }
        return (b.updatedAt || b.id) - (a.updatedAt || a.id);
    });

    return (
        <div className="container-fluid px-5 py-4 position-relative style={{ minHeight: 'calc(100vh - 60px)' }}">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                <h2 className="fw-normal m-0 fs-3">All Notes ({sortedNotes.length})</h2>

                <div className="d-flex gap-3">
                    <div className="form-floating" style={{ width: "160px" }}>
                        <select className="form-select form-select-sm" id="categoryFilter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="All Categories">All Categories</option> {/*this is default*/}
                            {categories.map((cat, idx) => (
                                <option key={idx} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="categoryFilter">Category</label>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="form-floating" style={{ width: "160px" }}>
                        <select className="form-select form-select-sm" id="sortFilter" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="Last Updated">Last Updated</option>
                            <option value="Title">Title</option>
                        </select>
                        <label htmlFor="sortFilter">Sort By</label>
                    </div>
                </div>
            </div>

            {/* Note Cards Grid */}
            <div className="row g-3">
                {sortedNotes.map((note) => (
                    <div key={note.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="card h-100 shadow-sm border-0 bg-white rounded-2 p-3 d-flex flex-column justify-content-between">
                            <div>
                                <h5 className="card-title fw-normal fs-5 mb-2 text-dark">{note.title}</h5>
                                <span className="badge bg-light text-secondary border-0 fw-normal px-2 py-1 rounded-pill mb-3">{note.category}</span>
                                <p className="text-muted small mb-0 mt-1">{note.date || "Jul 20, 2025 6:58 PM"}</p>
                            </div>
                            <div className="d-flex gap-3 align-items-center mt-4">
                                <Link to={`/n/${note.id}`} className="btn btn-link p-0 text-decoration-none text-primary fw-medium btn-sm d-flex align-items-center gap-1">
                                    <i className="bi bi-pencil-fill"></i> EDIT
                                </Link>
                                <button type="button" className="btn btn-link p-0 text-decoration-none text-danger fw-medium btn-sm d-flex align-items-center gap-1" onClick={() => onDeleteNote(note.id)}>
                                    <i className="bi bi-trash-fill"></i> DELETE
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {sortedNotes.length === 0 && (
                    <div className="col-12 text-center py-5">
                        <p className="text-muted fs-5">No notes found.</p>
                    </div>
                )}
            </div>

            <Link
                to="/add"
                className="btn btn-primary rounded-circle shadow position-fixed d-flex align-items-center justify-content-center"
                style={{
                    width: "56px",
                    height: "56px",
                    bottom: "30px",
                    right: "30px",
                    fontSize: "24px",
                    zIndex: 1000,
                }}
                title="Add Note"
            >
                <i className="bi bi-plus-lg text-white"></i>
            </Link>
        </div>
    );
};

export default HomePage;
