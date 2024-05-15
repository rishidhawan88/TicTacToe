import React from "react";

export default function Player(props){
    const [isEditing, setIsEditing]=React.useState(false);
    const [playerName, setPlayerName]=React.useState(props.name);
    function handleEditButton(){
        setIsEditing((isEditing)=>!isEditing);
    }

    function playerNameChange(event){
        setPlayerName(event.target.value);
    }
    

    let playerNameDiv=<span className="player-name">{playerName}</span>;
    if(isEditing){
        playerNameDiv=<span><input value={playerName} onChange={playerNameChange}></input></span>
    }

    return(
        <li className={props.isActive?'active':undefined}>
            <span className="player">
            {playerNameDiv}
            <span className="player-symbol">{props.symbol}</span>
            
            </span>
        <button onClick={handleEditButton}>{isEditing?"save":"edit"}</button>
        </li>

    );
}