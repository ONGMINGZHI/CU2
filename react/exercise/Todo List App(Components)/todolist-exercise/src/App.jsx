import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="card rounded shadow-sm" style={{ maxWidth: "500px", margin: "60px auto" }}>
                <div className="card-body">
                    <h3 className="card-title mb-3">My Todo List</h3>
                    <TodoList />
                    <AddTodoForm />
                </div>
            </div>
        </>
    );
}

export default App;