import BasketballPlayer from "./BasketballPlayer"

function BasketballTeam({team_name="Unnamed Team Name",team_star_player="Unnamed Star Player",team_manager="Unnamed Team Maneger",players=["Unnamed Players"]}){
    return(
        <div>
            <h3>Team Name : {team_name}</h3>
            <h3>Star Player : {team_star_player}</h3>
            <h2>Team Manager : {team_manager}</h2>
            <p>Players:</p>
            {/* .map() is for you to iterate through every element in the array */}
            {players.map((player,index)=>(
                <BasketballPlayer key={index} player_name={player}/>
            ))}
            {/* In the instance above, we iterate through players */}
            {/* Reference from ShowBasketballTeam.jsx to see the players, it should be in the form of an array */}
            {/* Because it is an array, we use .map() to parse through each element */}
            {/* Each item in the array will be used as 'player' in the map() function */}
            {/* We also include index as the key because we are displaying multiple BasketballPlayer components */}
            {/* Then, we use 'player' to assign to BasketballPlayer's player_name prop, so it can display the player_name in the BasketballPlayer component*/}
            <br></br>
        </div>
    )

}

export default BasketballTeam