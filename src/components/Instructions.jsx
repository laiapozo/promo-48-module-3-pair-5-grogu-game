import "../scss/components/Instructions.scss";

const Instructions = () => {
  return (
    <section className="instructions">
      <article>
        <h3>Objetivo del Juego:</h3>
        <p>
          El objetivo es vaciar el armario (Casilla 7) trasladando la mercancía
          a la zona segura sin que Grogu logre llegar al armario. Si Grogu llega
          al armario antes de que completes la tarea, se come lo que encuentre,
          lo que resulta en la pérdida de la misión y, por lo tanto, de la
          recompensa.
        </p>
      </article>
      <article>
        <h3>Cómo jugar:</h3>
        <p>
          En este juego el azar decide el resultado. Dependiendo del resultado
          del dado, lograremos vaciar el armario o haremos que Grougu avance.
          ¡Aquí es la suerte quien manda, así que cruza los dedos! 🍀🎲
        </p>
      </article>
      <article>
        <h3>Final del Juego: El juego termina cuando:</h3>
        <ul>
          <li>
            Logras vaciar completamente el armario sin que Grogu alcance la
            mercancía. Ganas el juego y aseguras la recompensa.
          </li>
          <li>
            Grogu llega al armario antes de que hayas terminado de vaciarlo.
            Pierdes el juego, y Mando pierde la oportunidad de localizar a
            Ahsoka.
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Instructions;
