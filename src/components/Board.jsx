import Grogu from "./Grogu";

function Board({groguPosition}) {
  const cells = Array(7).fill(null);

  return (
    <section className="board">
      {
        cells.map((cell, index) => {
          return <div key={index} className="cell">{(groguPosition === index) && <Grogu />}</div>
        })
      }
    </section>
  );
}

export default Board;
