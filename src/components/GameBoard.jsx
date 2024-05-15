import React from "react";

const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];


export default function GameBoard({onSelectCell,turn}){
    // const [gameBoard,setGameBoard]=React.useState(initialGameBoard);

    // function handleCellClick(rowindex,columnindex){
    //     if(gameBoard[rowindex][columnindex]===null){
    //     setGameBoard((gameBoard)=>{
    //         const newGameBoard=[...gameBoard.map((row)=>[...row])];
    //         newGameBoard[rowindex][columnindex]=props.activePlayerSymbol;
    //         return newGameBoard;
    //     })

    //     props.onSelectCell();}
    // }

    let gameBoard=initialGameBoard;

    for(const x of turn ){
        const {square,player}=x;
        const {row,col}=square;
        
        gameBoard[row][col]=player;
    }


    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex)=><li id={rowIndex}>
                <ol>
                    {row.map((playerSymbol,columnIndex)=><li id={columnIndex}>
                        <button onClick={()=>onSelectCell(rowIndex,columnIndex)} disabled={playerSymbol!==null?true:false}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}