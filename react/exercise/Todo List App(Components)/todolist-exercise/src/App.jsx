// import { useState,useEffect } from "react";
// import AddTodoForm from "./AddTodoForm";
// import TodoList from "./Todolist";

// function App() {
//     const [todos, setTodos] = useState([
//         {
//             id: 1,
//             label: "Task 1",
//             isCompleted: true,
//         },
//         {
//             id: 2,
//             label: "Task 2",
//             isCompleted: false,
//         },
//         {
//             id: 3,
//             label: "Task 3",
//             isCompleted: false,
//         },
//     ]);

//     const toggleIsCompleted = (taskId) => {
//         setTodos(todos.map((todo) => (todo.id === taskId ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
//     }

//     const deleteTodo = (id) => {
//         setTodos(todos.filter((todo) => todo.id != id))
//     }
    
//     const addToDo = (label) => {
//         setTodos([...todos,
//             {
//                 id: todos.length + 1,
//                 label: label,
//                 isCompleted: false
//             }
//         ])
//     }
//         useEffect(() => {
//         console.log("This useEffect will ONLY run on the first load");
//         console.log("No matter what variablies changes, I will not display this message again");
//     }, []);


//     return (
//         <>
//             <div className="card rounded shadow-sm" style={{ maxWidth: "500px", margin: "60px auto" }}>
//                 <div className="card-body">
//                     <h3 className="card-title mb-3">My Todo List</h3>
//                     <TodoList todos={todos} toggleIsCompleted={toggleIsCompleted} deleteTodo={deleteTodo} />
//                     <AddTodoForm addToDo={addToDo} />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default App;

import { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./Todolist";

function App() {
    // 1. Initialize state as an empty array (or fallback items if localStorage is empty)
    const [todos, setTodos] = useState([]);

    // 2. EFFECT 1: Load data from localStorage ONCE on initial page load
    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            try {
                setTodos(JSON.parse(savedTodos));
            } catch (error) {
                console.error("Failed to parse todos from localStorage:", error);
            }
        } else {
            // Default initial data if nothing is saved in localStorage yet
            setTodos([
                { id: 1, label: "Task 1", isCompleted: true },
                { id: 2, label: "Task 2", isCompleted: false },
                { id: 3, label: "Task 3", isCompleted: false },
            ]);
        }
    }, []);

    // 3. EFFECT 2: Save data to localStorage whenever `todos` changes
    useEffect(() => {
        // Only run save if todos has been initialized to avoid overwriting on initial render
        if (todos.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos]);

    const toggleIsCompleted = (taskId) => {
        setTodos(todos.map((todo) => (todo.id === taskId ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        // Ensure localStorage updates even if all items are deleted
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const addToDo = (label) => {
        setTodos([
            ...todos,
            {
                id: todos.length+1 ,
                label: label,
                isCompleted: false,
            },
        ]);
    };

    return (
        <>
            <div className="card rounded shadow-sm" style={{ maxWidth: "500px", margin: "60px auto" }}>
                <div className="card-body">
                    <h3 className="card-title mb-3">My Todo List</h3>
                    <TodoList todos={todos} toggleIsCompleted={toggleIsCompleted} deleteTodo={deleteTodo} />
                    <AddTodoForm addToDo={addToDo} />
                </div>
            </div>
        </>
    );
}

export default App;