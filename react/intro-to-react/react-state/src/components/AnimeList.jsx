// Today,we will learn about React State.
// It is a type of React Hook.
// To use it, we need to import useState from react.
import { useState } from "react";

function AnimeList() {
    // This is how we can create our useState variable
    // We can use the useState on the right side to set our default value for the variable
    const [animeList, setAnimeList] = useState(["One Piece", "Naruto", "Bleach", "Pokemon"]);
    // Notice how we have two items inside our declaration above
    // On the left, we have a useState variable
    // On the right, we have a useState function to UPDATE the useState variable.
    const [animeInput, setAnimeInput] = useState("");

    function addJujutsuKaisen() {
        setAnimeList([...animeList, "Jujutsu Kaisen"]);
    }

    function submitNewAnime() {
        console.log(animeInput);
        setAnimeList([...animeList, animeInput]);
        setAnimeInput("");
    }

    return (
        <div>
            <ul className="list-group">
                {/* How would we normally display our data,hard-coded */}
                {/* <li>One Piece</li>
                <li>Naruto</li>
                <li>Bleach</li>
                <li>Pokemon</li> */}

                {/* Using .map() to display the useState variable */}
                {animeList.map((anime, key) => (
                    <li className="list-group-item" key={key}>
                        {anime}
                    </li>
                ))}
            </ul>

            {/* Now we add a form inout to allow user to type their own anime */}
            <input type="text" value={animeInput} className="form-control w-50 my-4 mx-auto text-center" placeholder="Enter your Anime" onChange={(e) => setAnimeInput(e.target.value)} 
            // This just sends the new anime to the list when press 'enter'
            onKeyDown={(event)=>{
                if(event.key ==="Enter"){
                    event.preventDefault()
                    submitNewAnime()
                }
            }}/>

            {/* We use the setter function from useState to update */}
            {/* The animeList variable */}
            {/* <button className='btn btn-primary d-block mx-auto my-3' onClick={() => setAnimeList([...animeList, "Jujutsu Kaisen"])}>Add Jujutsu Kaisen</button> */}

            {/* <button className="btn btn-primary d-block mx-auto my-3" onClick={addJujutsuKaisen}>
                Add Jujutsu Kaisen
            </button> */}

            <button className='btn btn-primary d-block mx-auto my-3' onClick={submitNewAnime}>Submit new Anime</button>

            {/* Try creating another button that "pushes" a new */}
            {/* Element in instead */}
            {/* <button className="btn btn-primary d-block mx-auto my-3" onClick={() => animeList.push("Jujutsu Kaisen")}>
                Add Jujutsu Kaisen with Push
            </button> */}
        </div>
    );
}

export default AnimeList;
