import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";

const AddNote = ({ onAddNote, categories = ["Work", "Personal", "Ideas"] }) => {
    const navigate = useNavigate();
    const editorRef = useRef(null);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(categories[0] || "Work");

    const executeCommand = (command, value = null) => {
        document.execCommand(command, false, value);
        if (editorRef.current) {
            editorRef.current.focus();
        }
    };

    const handleAddLink = () => {
        const url = prompt("Enter URL:", "https://");
        if (url) {
            executeCommand("createLink", url);
        }
    };

    const handleStyleChange = (e) => {
        const style = e.target.value;
        if (style === "styles") return;
        executeCommand("formatBlock", `<${style}>`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const contentHtml = editorRef.current ? editorRef.current.innerHTML : "";

        if (!editorRef.current || !editorRef.current.innerText.trim()) {
            alert("Please write some content for your note.");
            return;
        }

        const now = new Date();
        const formattedDate =
            now.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            }) +
            " " +
            now.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            });

        const newNote = {
            id: String(Date.now()),
            title,
            category,
            content: contentHtml,
            date: formattedDate,
        };

        if (onAddNote) {
            onAddNote(newNote);
        }

        navigate("/");
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className="container my-5">
            <h2 className="text-center fw-normal mb-4">Add Note</h2>

            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow-sm border-light-subtle p-4">
                        <form onSubmit={handleSubmit}>
                            {/* Title Field */}
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="noteTitle" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                <label htmlFor="noteTitle">Title</label>
                            </div>

                            {/* Category */}
                            <div className="form-floating mb-3">
                                <select className="form-select" id="noteCategory" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    {categories.map((cat, index) => (
                                        <option key={index} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="noteCategory">Category</label>
                            </div>

                            <label className="form-label text-secondary small mb-1">Content</label>

                            <div className="border rounded mb-4 overflow-hidden">
                                <div className="bg-light border-bottom p-2 d-flex flex-wrap align-items-center gap-1">
                                    <button type="button" className="btn btn-sm btn-light border-0 px-2" title="Undo" onClick={() => executeCommand("undo")}>
                                        <i className="bi bi-arrow-counterclockwise"></i>
                                    </button>
                                    <button type="button" className="btn btn-sm btn-light border-0 px-2" title="Redo" onClick={() => executeCommand("redo")}>
                                        <i className="bi bi-arrow-clockwise"></i>
                                    </button>

                                    <div className="vr mx-1"></div>

                                    <button type="button" className="btn btn-sm btn-light border-0 px-2 fw-bold" title="Bold" onClick={() => executeCommand("bold")}>
                                        B
                                    </button>
                                    <button type="button" className="btn btn-sm btn-light border-0 px-2 fst-italic" title="Italic" onClick={() => executeCommand("italic")}>
                                        I
                                    </button>
                                    <button type="button" className="btn btn-sm btn-light border-0 px-2 text-decoration-underline" title="Underline" onClick={() => executeCommand("underline")}>
                                        U
                                    </button>
                                    <button type="button" className="btn btn-sm btn-light border-0 px-2 text-decoration-line-through" title="Strikethrough" onClick={() => executeCommand("strikeThrough")}>
                                        S
                                    </button>

                                    <div className="vr mx-1"></div>

                                    <button type="button" className="btn btn-sm btn-light border-0 px-2" title="Bullet List" onClick={() => executeCommand("insertUnorderedList")}>
                                        <i className="bi bi-list-ul"></i>
                                    </button>
                                    <button type="button" className="btn btn-sm btn-light border-0 px-2" title="Numbered List" onClick={() => executeCommand("insertOrderedList")}>
                                        <i className="bi bi-list-ol"></i>
                                    </button>

                                    <div className="vr mx-1"></div>

                                    <button type="button" className="btn btn-sm btn-light border-0 px-2" title="Link" onClick={handleAddLink}>
                                        <i className="bi bi-link-45deg"></i>
                                    </button>
                                    <button type="button" className="btn btn-sm btn-light border-0 px-2" title="Code" onClick={() => executeCommand("formatBlock", "<pre>")}>
                                        <i className="bi bi-code-slash"></i>
                                    </button>

                                    <select className="form-select form-select-sm ms-auto" style={{ width: "auto" }} onChange={handleStyleChange} defaultValue="styles">
                                        <option value="styles" disabled>
                                            Styles
                                        </option>
                                        <option value="h1">Heading 1</option>
                                        <option value="h2">Heading 2</option>
                                        <option value="p">Paragraph</option>
                                    </select>
                                </div>

                                <div
                                    ref={editorRef}
                                    contentEditable
                                    className="form-control border-0 p-3"
                                    style={{
                                        minHeight: "150px",
                                        outline: "none",
                                        boxShadow: "none",
                                    }}
                                    suppressContentEditableWarning={true}
                                ></div>
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <button type="submit" className="btn btn-primary px-4 fw-medium text-uppercase">
                                    Add Note
                                </button>
                                <button type="button" className="btn btn-outline-primary px-4 fw-medium text-uppercase" onClick={handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNote;
