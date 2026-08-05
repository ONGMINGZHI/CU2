Theme-based React App

React Mini-Project — Topic List

Choose one topic from the list below. Every topic is scoped to be of comparable difficulty, so pick the one you find most interesting.

How Grading Works

Each topic is split into three tiers. Read this section before choosing.

Main Features — Minimum Passing Requirement

These are not optional. A project that does not fully implement its Main Features cannot pass, no matter how good it looks. Every topic requires the same baseline:

Functional components with React Hooks — useState for local state, useEffect for side effects and persistence. Use useReducer or useContext where the data gets complex enough to justify it.
Full CRUD — the user must be able to Create, Read, Update, and Delete the main record type of your app. All four. A delete button that does nothing is a failed requirement.
localStorage persistence — every piece of user data must survive a page refresh and a browser restart. If I refresh your app and the data disappears, the project has failed the minimum requirement.
React Router navigation — a minimum of two routes (typically a list view and a detail/form view). More routes are welcome.
Controlled forms with validation — all inputs are controlled by React state. Required fields must be enforced, and invalid input must show a visible error message rather than silently saving.

Secondary Features — Improves Your Score

Filtering, sorting, searching, and similar quality-of-life features. Attempt these only after your Main Features are complete and working. Two are listed per topic.

Stretch Features — For an Excellent Score

Harder features that demonstrate stronger command of React. These are genuinely optional and are only credited if everything above them is solid.

Universal Rules

Client-side only. No backend, no database, no server. localStorage is your only persistence layer.
No external APIs unless explicitly listed as a Stretch Feature for your topic.
Handle the empty state — a brand-new user with zero records must see something sensible, not a blank page or a crash.
Handle corrupt or missing localStorage data gracefully. Wrap your JSON.parse in a try/catch. 

Title:Movie & Series Watchlist

Introduction

Build a watchlist app for films and TV series — what the user wants to watch, what they are part-way through, and what they thought of it afterwards.

Main Features

Title CRUD: Add, view, edit, and delete entries with title, type (movie / series), genre, release year, status (want to watch / watching / watched), and rating.
Series Progress: For series, track the current season and episode.
Persistence: Watchlist and ratings stored in localStorage.
Navigation: Routes for the watchlist and the individual title detail view.

Secondary Features

Filter by type, genre, or status.
Sort by rating, release year, or date added.

Stretch Features

Personal review text and a “watched on” date, with a stats view showing counts by genre.
A “random pick” button that suggests something from the want-to-watch list.

Key Requirements

The form must be conditional — season and episode fields appear only when the type is set to series.
Validation: title required; release year must be a plausible four-digit year; rating within a fixed range.
Marking a title as watched should sensibly handle the progress fields.
Handle a long watchlist without the UI becoming unusable.
Submission Notes

Your project must run with a single npm install followed by npm run dev. Test this on a clean clone before submitting.
Include a short README.md stating which topic number you chose, which Secondary and Stretch Features you attempted, and anything you know is incomplete. Be honest — an accurate README is worth more than an optimistic one.
Commit your work regularly. A single commit at the deadline tells me nothing about your process.

React Individual Project Making:

4 August ~ 12 August 2026 (2 hours of project making 10 am ~ 12 pm)

Presentation & Submission: 12th August 2025, 10 am.

Deliverables:

Submit your project through a GitHub repository.
Demonstrate your work via a live demo deployed on a platform such as Netlify or Vercel. (Optional, Netlify not working for students)

Evaluation:

Your project will be evaluated based on the following criteria:

Code Quality: Your code should be well-structured and readable, including comments describing the functionality where necessary.
UI/UX: Your application should have a clean, intuitive interface. It should be responsive and provide a good user experience.
Functionality: Your application should function as described in the project requirement. All user inputs and interactions should work as expected.
Requirements: Your application meets all the requirements listed above.

Marking Schema:

50% - Main Features & Key Requirements

30% - Secondary Features

15% - Presentation & Final Outcome

5% - Submit projects before the deadline and attend project-making week.
