import { useState } from "react"

// Use arrow function here
const AnimalsList = () => {
    // useState Variables here
    const [animals,setAnimals]=useState([])
    const [animalEntry, setAnimalEntry] = useState("")

    // This is a function to add animals into list
    const addAnimal = () =>{
        console.log(animalEntry)
        setAnimals([...animals,animalEntry])
        setAnimalEntry("")
    }

    return(
        <>
            <ul>
                {/* To display the list */}
                {animals.map((animal,key)=>(
                    <li key={key}>{animal}</li>
                ))}
            </ul>
            {/* The input text box */}
            <input type="text" value={animalEntry} onChange={(event)=>setAnimalEntry(event.target.value)}
                onKeyDown={(event)=>{
                if(event.key ==="Enter"){
                    event.preventDefault()
                    addAnimal()
                }
                }}/>
            {/* The button to add animal to the list */}
            <button onClick={addAnimal}>Add Animal</button>
        </>
    )
}

export default AnimalsList