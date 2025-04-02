const GameStatus = ({ gameStatus, name }) => {
  return <div className="game-status">{`${name} ${gameStatus} `}</div>;
};

export default GameStatus;
