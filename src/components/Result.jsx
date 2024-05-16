export default function Result({winner,onRematch}){
    return(
        <div id="game-over">
        <h2>GAME OVER</h2>
        {winner && <p>{winner} won</p>}
        {winner===null && <p>Match Draw</p>}

        <p>
        <button onClick={onRematch}>Rematch</button>
        </p>
        
        </div>
    );
}