import React, { useState } from "react";

const CategoriesPage = ({ categories = [], setCategories }) => {
    const [newCategory, setNewCategory] = useState("");
    const [editingCategory, setEditingCategory] = useState(null); // Tracks category being edited
    const [editedName, setEditedName] = useState("");

    // Add New Category
    const handleAddCategory = (e) => {
        e.preventDefault();
        const trimmed = newCategory.trim();
        if (!trimmed) return;

        if (!categories.includes(trimmed)) {
            setCategories([...categories, trimmed]);
        }
        setNewCategory("");
    };

    const handleStartEdit = (category) => {
        setEditingCategory(category);
        setEditedName(category);
    };

    // Save Category Edit
    const handleSaveEdit = (oldCategory) => {
        const trimmed = editedName.trim();
        if (trimmed && trimmed !== oldCategory) {
            setCategories(categories.map((cat) => (cat === oldCategory ? trimmed : cat)));
        }
        setEditingCategory(null);
    };

    // Delete Category
    const handleDeleteCategory = (categoryToDelete) => {
        setCategories(categories.filter((cat) => cat !== categoryToDelete));
    };

    return (
        <div className="container my-5">
            <h2 className="text-center fw-normal mb-4">Manage Categories</h2>

            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow-sm border-light-subtle p-4 mb-4">
                        <h6 className="card-title fw-normal text-secondary mb-3">Add New Category</h6>
                        <form onSubmit={handleAddCategory} className="d-flex gap-2">
                            <input type="text" className="form-control" placeholder="Category Name" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                            <button type="submit" className="btn btn-primary px-4 fw-medium text-uppercase">
                                Add
                            </button>
                        </form>
                    </div>

                    <div className="card shadow-sm border-light-subtle p-4">
                        <h6 className="card-title fw-normal text-secondary mb-3">Existing Categories ({categories.length})</h6>

                        <ul className="list-group list-group-flush">
                            {categories.map((category, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center py-3 px-0 border-bottom">
                                    {editingCategory === category ? (
                                        <div className="d-flex align-items-center gap-2 w-100 me-3">
                                            <input type="text" className="form-control form-control-sm" value={editedName} onChange={(e) => setEditedName(e.target.value)} autoFocus />
                                            <button type="button" className="btn btn-sm btn-success" onClick={() => handleSaveEdit(category)}>
                                                Save
                                            </button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setEditingCategory(null)}>
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <span className="fs-6 text-body">{category}</span>

                                            <div className="d-flex gap-3">
                                                <button type="button" className="btn btn-link p-0 text-secondary" title="Edit Category" onClick={() => handleStartEdit(category)}>
                                                    <i className="bi bi-pencil"></i>
                                                </button>

                                                <button type="button" className="btn btn-link p-0 text-secondary" title="Delete Category" onClick={() => handleDeleteCategory(category)}>
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </li>
                            ))}

                            {categories.length === 0 && <p className="text-muted my-3 text-center">No categories added yet.</p>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;
