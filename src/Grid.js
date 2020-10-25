import React, { useState } from 'react';
import produce from 'immer';

const numRows = 16;
const numCols = 30;
const colors = ['blue', 'red', 'green', 'yellow', 'pink', 'gray', 'purple', 'orange'];

const Grid = (props) => {
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i=0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0))
        }
        
        return rows;
    });
    
    console.log(grid);
    
    const random = Math.floor(Math.random() * colors.length);
    
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numCols}, 30px)`
        }}>

            {grid.map((rows, i) => 
             rows.map((col, k) => <div    
             key={`${i}-${k}`}
             onClick = {() => {
                 const newGrid = produce(grid, gridCopy => {
                     gridCopy[i][k] = grid[i][k] ? 0 : 1;
                    })
                    setGrid(newGrid);
                }}
                style={{
                    width: 30, 
                    height: 30,
                    backgroundColor: grid[i][k] ?  colors[random] : undefined,
                    border: 'solid 1px black',
                    }}
                />
                ))}
        </div>
    );
};

export default Grid;