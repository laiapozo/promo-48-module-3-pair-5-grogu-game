import "../scss/App.scss";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import Footer from "./Footer";
import Instructions from "./Instructions";
import Options from "./Options";
import Form from "./Form";
import GameStatus from "./GameStatus";

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);
  const [dice, setDice] = useState(null);
  const [gameStatus, setGameStatus] = useState("En curso");
  const [name, setName] = useState("");

  const rollDice = () => {
    setDice(Math.floor(Math.random() * (5 - 1) + 1));
    if (dice === 4) {
      setGroguPosition(groguPosition + 1);
      setGameStatus(`¡Atenta, ${name}! Ha salido un ${dice}: Grogu avanza`);
    } else if (dice === 1) {
      setCookies(cookies.slice(0, -1));
      setGameStatus(`¡Bien hecho, ${name}! Ha salido un ${dice}: Se ha descargado una galleta`);
    } else if (dice === 2) {
      setEggs(eggs.slice(0, -1));
      setGameStatus(`¡Bien hecho, ${name}! Ha salido un ${dice}: Se ha descargado un huevo`);
    } else if (dice === 3) {
      setFrogs(frogs.slice(0, -1));
      setGameStatus(`¡Bien hecho, ${name}! Ha salido un ${dice}: Se ha descargado una rana`);
    }
  };

  useEffect(() => {
    if (groguPosition === 6) {
      setGameStatus(`¡Grogu se ha comido el cargamento! Has perdido, ${name}...`);
    } else if (
      cookies.length === 0 &&
      eggs.length === 0 &&
      frogs.length === 0
    ) {
      setGameStatus(`¡Has ganado, ${name}! Mando completa la misión.`);
    }
  }, [cookies, eggs, frogs, groguPosition]);

  const onChangeName = (value) => {
    setName(value);
  };

  const handleResetButton = () => {
    setGroguPosition(0);
    setCookies(["🍪", "🍪", "🍪"]);
    setEggs(["🥚", "🥚", "🥚"]);
    setFrogs(["🐸", "🐸", "🐸"]);
    setDice(null);
    setGameStatus("En curso");
    setName("");
  };

  return (
    <div className="page">
      <Header />
      <main className="page">
        <Routes>
          <Route path="/instructions" element={<Instructions />} />
          <Route
            path="/"
            element={
              <>
                <Form onChangeName={onChangeName} name={name} />
                <Board groguPosition={groguPosition} />
                <section className="results">
                  <Dice onClickDice={rollDice} />
                  <GameStatus gameStatus={gameStatus} />
                </section>

                <section className="goods-container">
                  <div className="goods-item">{cookies}</div>
                </section>
                <section className="goods-container">
                  <div className="goods-item">{eggs}</div>
                </section>
                <section className="goods-container">
                  <div className="goods-item">{frogs}</div>
                </section>
                <section>
                  <button
                    className="restart-button"
                    onClick={handleResetButton}
                  >
                    Reiniciar Juego
                  </button>
                </section>
              </>
            }
          />
          <Route path="/options" element={<Options />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
