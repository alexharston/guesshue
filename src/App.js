import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import { GuessHue } from './Game';
import GuessHueBoard from './Board';
import Grid from './Grid';
import './App.css';

const GuessHueClient = Client({ game: GuessHue, 
                     board: GuessHueBoard,
                    multiplayer: Local(),
                  });

const App = () => {
  return(
    <div>
      <GuessHueClient playerId="0" />
      <GuessHueClient playerId="1" />
      <Grid />
    </div>
  )
};

export default App;
