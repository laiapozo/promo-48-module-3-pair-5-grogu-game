import "../scss/App.scss";
import { useState } from "react";

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

  const [groguPosition, setGroguPosition] = useState("");
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"])
  const [dice, setDice] = useState(0)
  const [state, setState] = useState(true)


  

  return (
    <div className="page">
      <header>
        <h1>¡Cuidado con Grogu!</h1>
      </header>
      <main className="page">
        <section className="board">
          <div className="cell">
            <div className="grogu">👣</div>
          </div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </section>

        <section>
          <button className="dice">Lanzar Dado</button>
          <div className="game-status">En curso</div>
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
