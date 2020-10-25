import React, {useState, useEffect} from 'react';


const GuessHueBoard = (props) => {
    const [ID, setID] = useState(0);

    useEffect(() => {
        document.title = "Guess Hue - Play a game"
    });

    let winner = '';
    if (props.ctx.gameover) {
      winner = props.ctx.gameover.winner !== undefined ? (
      <div id="winner">The winner is: {props.ctx.gameover.winner}</div>
      ) : (
        <div id="winner">It's a draw!</div>
      );
    }

    let cellList = [];
    for (let i = 0; i < 360; i++) {
      cellList.push(
        <div key={i} onClick={() => this.onClick(setID)}>
          {props.G.cells[i]}
        </div>
      ) 
    }

    return (
        <div>
          {cellList}
        </div>    
    );
};

export default GuessHueBoard;