import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navigation from "./Navigations";
import HomePage from "./pages/HomePage";
import AddNote from "./pages/AddNote";
import CategoriesPage from "./pages/CategoriesPage";
import EditNotePage from "./pages/EditNotePage";
import "./App.css";

function App() {
    const [notes, setNotes] = useState([
        {
            id: "1",
            title: "Which theme should we pick?",
            category: "Ideas",
            content: "Discuss design themes with the team.",
        },
        {
            id: "2",
            title: "Project making week",
            category: "Personal",
            content: "Prepare project milestones and set deadlines.",
        },
        {
            id: "3",
            title: "Assignment Sheets",
            category: "Work",
            content: "Remember to do the assignment sheets before Friday.",
        },
    ]);

    const [categories, setCategories] = useState(["Work", "Personal", "Ideas"]);

    const handleAddNote = (newNote) => {
        setNotes((prevNotes) => [newNote, ...prevNotes]);
    };

    const handleUpdateNote = (updatedNote) => {
        setNotes((prevNotes) => prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
    };

    const handleDeleteNote = (idToDelete) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== idToDelete));
    };

    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage notes={notes} onDeleteNote={handleDeleteNote} categories={categories} />}/>
                <Route path="/add" element={<AddNote onAddNote={handleAddNote} categories={categories} />} />
                <Route path="/categories" element={<CategoriesPage categories={categories} setCategories={setCategories} />} />
                <Route path="/n/:id" element={<EditNotePage notes={notes} onUpdateNote={handleUpdateNote} categories={categories} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
