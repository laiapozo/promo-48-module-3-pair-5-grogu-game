import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";

/*
Al arrancar la página
  - Grogu está en la primera celda
  - Cada caja de mercancías tiene tres elementos
  - El dado es 0

Funcionalidades
  -Lanzar el dado. Alhacer click en el dado:
    - se genera un número aleatorio entre 1 y 4
    - si es 1 
      --> Grogu avanza una celda
    - si es 2 
      --> vaciamos una galleta
    - si es 3 
      --> vaciamos un huevo
    - si no 
      --> vaciamos una rana 

    - Si grogu llega a la última celda
      --> gameover
    - Si todas las mercancías están vacías
      --> el jugador gana

  Si la usuaria pulsa "Reiniciar Juego"
    - Grogu vuelve a la posición 1
    - Cada una de las cajas de mercancías se llenan
    - El dado es 0

  Pintar toda la lógica
        
        
*/

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);
  const [dice, setDice] = useState(null);
  const [gameStatus, setGameStatus] = useState("En curso");

  const rollDice = () => {
    setDice(Math.floor(Math.random() * (5 - 1) + 1));
    if (dice === 4) {
      setGroguPosition(groguPosition + 1);
      setGameStatus(`Ha salido un ${dice}: Grogu avanza`);
    } else if (dice === 1) {
      setCookies(cookies.slice(0, -1));
      setGameStatus(
        `Ha salido un ${dice}: Se ha descargado una galleta`
      );
    } else if (dice === 2) {
      setEggs(eggs.slice(0, -1));
      setGameStatus(`Ha salido un ${dice}: Se ha descargado un huevo`);
    } else if (dice === 3) {
      setFrogs(frogs.slice(0, -1));
      setGameStatus(`Ha salido un ${dice}: Se ha descargado una rana`);
    }
  };

  return (
    <div className="page">
      <Header />
      <main className="page">
        <Board groguPosition={groguPosition} />
        <section className="results">
          <Dice onClickDice={rollDice} />

          <div className="game-status">{gameStatus}</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
