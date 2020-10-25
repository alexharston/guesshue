import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import { GuessHue } from './Game';
import GuessHueBoard from './Board';
import Logo from './Logo';
import Header from './Header';
import Controls from './Controls';
import Grid from './Grid';
import Div100vh from "react-div-100vh";

import './App.css';

const GuessHueClient = Client({ game: GuessHue, 
                     board: GuessHueBoard,
                    multiplayer: Local(),
                  });

const App = () => {
  return(
    <div>
      <Header/>
      <GuessHueClient playerId="0" />
      <GuessHueClient playerId="1" />
      <Grid />
      <Controls/>
    </div>
  )
};

export default App;
