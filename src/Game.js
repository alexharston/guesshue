import { INVALID_MOVE } from 'boardgame.io/core';

export const GuessHue = {
    setup: () => ({ cells: Array(480).fill(null) }),
    
    turn: {
        moveLimit: 1,
    },

    moves: {
        clickCell: (G, ctx, id) => {
            if (G.cells[id] !== null) {
                return INVALID_MOVE;
            }
            G.cells[id] = ctx.currentPlayer;
        },
    },
};
