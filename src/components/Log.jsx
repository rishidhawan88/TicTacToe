export default function Log(props){
    return(
        <ol id="log">
            {props.turn.map((x)=>(
                <li key={`${x.square.row}${x.square.col}`}>
                    {x.player} selected {x.square.row},{x.square.col}
                </li>
            )
                 
            )}
        </ol>
    );
}