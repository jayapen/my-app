import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
class Game extends React.Component {
    render() {
      return (
        <div className="App">
        <header className="App-header">
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
        </header>
        </div>
      );
    }
  }
  export default Game;