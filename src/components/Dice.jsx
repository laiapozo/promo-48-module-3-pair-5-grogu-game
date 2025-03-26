function Dice(props) {
  const handleClick = () => {
    props.onClickDice();
  };

  return (
    <button className="dice" onClick={handleClick}>
      Lanzar Dado
    </button>
  );
}

export default Dice;
