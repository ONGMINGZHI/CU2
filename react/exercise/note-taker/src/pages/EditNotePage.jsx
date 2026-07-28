import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const EditNotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Work");
  const [content, setContent] = useState("");

  useEffect(() => {
    const dummyNotes = [
      { id: "1", title: "Which theme should we pick?", category: "Ideas", content: "Discuss design themes." },
      { id: "2", title: "Project making week", category: "Personal", content: "Prepare project milestones." },
      { id: "3", title: "Assignment Sheets", category: "Work", content: "Remember to do the assignment sheets" }
    ];

    const currentNote = dummyNotes.find((note) => String(note.id) === String(id)) || dummyNotes[0];

    setTitle(currentNote.title);
    setCategory(currentNote.category);
    setContent(currentNote.content);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedNote = { id, title, category, content, updatedAt: new Date().toISOString() };
    
    console.log("Saving Note Changes:", updatedNote);
    navigate("/"); // Redirect back to Home Page
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-normal text-center">Edit Note</h2>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm border-light-subtle p-4">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="noteTitle"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <label htmlFor="noteTitle">Title</label>
              </div>

              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="noteCategory"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                  <option value="Ideas">Ideas</option>
                </select>
                <label htmlFor="noteCategory">Category</label>
              </div>

              <label className="form-label text-secondary small mb-1">Content</label>
              <div className="border rounded mb-4 overflow-hidden">
                <div className="bg-light border-bottom p-2 d-flex flex-wrap align-items-center gap-1">
                  <button type="button" className="btn btn-sm btn-light border-0 px-2" title="Undo">
                    <i className="bi bi-arrow-counterclockwise"></i>
                  </button>
                  <button type="button" className="btn btn-sm btn-light border-0 px-2" title="Redo">
                    <i className="bi bi-arrow-clockwise"></i>
                  </button>
                  <div className="vr mx-1"></div>
                  <button type="button" className="btn btn-sm btn-light border-0 px-2 fw-bold" title="Bold">
                    B
                  </button>
                  <button type="button" className="btn btn-sm btn-light border-0 px-2 fst-italic" title="Italic">
                    I
                  </button>
                  <button type="button" className="btn btn-sm btn-light border-0 px-2 text-decoration-underline" title="Underline">
                    U
                  </button>
                  <button type="button" className="btn btn-sm btn-light border-0 px-2 text-decoration-line-through" title="Strikethrough">
                    S
                  </button>
                  <div className="vr mx-1"></div>
                  <button type="button" className="btn btn-sm btn-light border-0 px-2" title="Bullet List">
                    <i className="bi bi-list-ul"></i>
                  </button>
                  <button type="button" className="btn btn-sm btn-light border-0 px-2" title="Numbered List">
                    <i className="bi bi-list-ol"></i>
                  </button>
                  <div className="vr mx-1"></div>
                  <button type="button" className="btn btn-sm btn-light border-0 px-2" title="Link">
                    <i className="bi bi-link-45deg"></i>
                  </button>
                  <button type="button" className="btn btn-sm btn-light border-0 px-2" title="Code">
                    <i className="bi bi-code-slash"></i>
                  </button>
                  <select className="form-select form-select-sm ms-auto" style={{ width: "auto" }}>
                    <option value="styles">Styles</option>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="p">Paragraph</option>
                  </select>
                </div>

                <textarea
                  className="form-control border-0 p-3"
                  rows="6"
                  style={{ resize: "none", outline: "none", boxShadow: "none" }}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your note here..."
                ></textarea>
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button type="submit" className="btn btn-primary px-4 fw-medium text-uppercase">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary px-4 fw-medium text-uppercase"
                  onClick={handleCancel}
                >
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

export default EditNotePage;