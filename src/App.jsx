import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import React from "react"
import Log from "./components/Log";
import Result from "./components/Result";
import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS";

const initialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function getActivePlayer(gameTurn){
  let tempActivePlayer='X';

  if(gameTurn.length>0 && gameTurn[0].player==='X')
    tempActivePlayer='O';

  return tempActivePlayer;
}

function App() {
  // const [activePlayer,setActivePlayer]=React.useState('X');
  const [gameTurn, setGameTurn]=React.useState([]);
  // const [winner,setWinner]=React.useState(null);
  const activePlayer=getActivePlayer(gameTurn);

  let gameBoard=initialGameBoard;
  let winner=null;
    

  function handleSelectCell(rowIndex,columnIndex){
    // setActivePlayer((currActivePlayer)=>{return currActivePlayer==='X' ? 'O' : 'X'});
    setGameTurn((prevGameTurn)=>{
      let tempActivePlayer=getActivePlayer(prevGameTurn);

      const tempGameTurn=[
        {square:{row:rowIndex, col:columnIndex} , player:tempActivePlayer }
        , ...prevGameTurn];
      // console.log(gameTurn[0]);
      return tempGameTurn;
    })
  }

  for(const x of gameTurn ){
    const {square,player}=x;
    const {row,col}=square;
    
    gameBoard[row][col]=player;
  }

  for(const combination of WINNING_COMBINATIONS){
    
    const cell1=gameBoard[combination[0].row][combination[0].column];
    const cell2=gameBoard[combination[1].row][combination[1].column];
    const cell3=gameBoard[combination[2].row][combination[2].column];

    

    if(cell1 && cell1===cell2 && cell2===cell3){
      winner=cell1;
      console.log(`we have a winner ${winner}`);
    }
  }

  const isDraw=(winner===null && gameTurn.length===9);

  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="player 1" symbol='X' isActive={activePlayer==='X'}/>
        <Player name="player 2" symbol='O' isActive={activePlayer==='O'}/>
      </ol>
      {/* {(winner!==null || turnsPlayed===9) && <Result winner={winner}/>} */}
      {(winner!==null || isDraw) && <Result winner={winner}/>}
      <GameBoard onSelectCell={handleSelectCell} board={gameBoard}/>
      </div>
      <Log turn={gameTurn}/>
    </main>
  )
}

export default App;
