import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import React from "react"

function App() {
  const [activePlayer,setActivePlayer]=React.useState('O');

  function handleSelectCell(){
    setActivePlayer((currActivePlayer)=>{return currActivePlayer==='X' ? 'O' : 'X'});
  }

  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="player 1" symbol='X' isActive={activePlayer==='X'}/>
        <Player name="player 2" symbol='O' isActive={activePlayer==='O'}/>
      </ol>
      <GameBoard onSelectCell={handleSelectCell} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  )
}

export default App
