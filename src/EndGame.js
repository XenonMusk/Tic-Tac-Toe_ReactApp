import React from 'react'

function EndGame({restartGame,player,draw, winCount, clearHistory}) {
  return (
    <div className='end-game-screen'>
     {!draw && <span className='win-text'>{player ? "Player 'O' WON": "Player 'X' WON"}</span>}
     {draw && <span className='win-text'>"DRAW GAME</span>}
      <span className='win-history'>X WON: {winCount.X} times
       <br/>
        O WON: {winCount.O} times
      </span>
        <button className='btn' onClick={restartGame}> RESTART GAME</button>
        <button className='btn' onClick={clearHistory}>CLEAR HISTORY</button>
    </div>
  )
}

export default EndGame