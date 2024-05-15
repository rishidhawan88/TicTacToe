import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import React from "react"
import Log from "./components/Log";

function getActivePlayer(gameTurn){
  let tempActivePlayer='X';

  if(gameTurn.length>0 && gameTurn[0].player==='X')
    tempActivePlayer='O';

  return tempActivePlayer;
}

function App() {
  // const [activePlayer,setActivePlayer]=React.useState('X');
  const [gameTurn, setGameTurn]=React.useState([]);

  const activePlayer=getActivePlayer(gameTurn);

  function handleSelectCell(rowIndex,columnIndex){
    // setActivePlayer((currActivePlayer)=>{return currActivePlayer==='X' ? 'O' : 'X'});
    setGameTurn((prevGameTurn)=>{
      let tempActivePlayer=getActivePlayer(prevGameTurn);

      const tempGameTurn=[
        {square:{row:rowIndex, col:columnIndex} , player:tempActivePlayer }
        , ...prevGameTurn];
      console.log(gameTurn[0]);
      return tempGameTurn;
    })
  }

  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="player 1" symbol='X' isActive={activePlayer==='X'}/>
        <Player name="player 2" symbol='O' isActive={activePlayer==='O'}/>
      </ol>
      <GameBoard onSelectCell={handleSelectCell} turn={gameTurn}/>
      </div>
      <Log turn={gameTurn}/>
    </main>
  )
}

export default App
