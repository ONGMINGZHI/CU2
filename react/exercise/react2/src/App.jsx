import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");

    const [isSubscribed, setIsSubscribed] = useState(false);

    const subscribeForm = (e) => {
        e.preventDefault();

        // Make sure all fields are filled in
        if (!nameInput || !emailInput) {
            alert("Please fill in all fields");
            return;
        }

        // Make sure the email is in the right format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailInput)) {
            alert("Please enter a valid email");
            return;
        }

        setName(nameInput);
        setEmail(emailInput);
        setIsSubscribed(true);
    };

    return (
        <div className="container border rounded mt-4 p-3">
            {isSubscribed ? (
                <div className="py-3 text-center">
                    <p className="text-success mb-3">Please check your email ({email}) for confirmation</p>
                    <button
                        className="btn btn-outline-secondary btn-sm mt-3"
                        onClick={() => {
                            setIsSubscribed(false);
                            setNameInput("");
                            setEmailInput("");
                        }}
                    >
                        Subscribe to another email
                    </button>
                </div>
            ) : (
                <>
                    <h1>Newsletter Subscription</h1>
                    <form onSubmit={subscribeForm}>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Your Name" id="name" required value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Your Email" id="email" required value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Subscribe
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

function App() {
    return <Form />;
}

export default App;
