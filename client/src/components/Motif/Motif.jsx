import { useState, useEffect } from "react";
import KeyboardContainer from "../keyboard/KeyboardContainer";
import "./motif.css";
import MotifGame from "./MotifGame";

function Motif() {
  const [solution, setSolution] = useState("");
  const [input, setInput] = useState("");

  // Listenning to keyboard
  function handleKeyPress(event) {
    const keyPressed = event.key.toUpperCase();
    if (input.length < 10) {
      setInput((prevInput) => prevInput + keyPressed);
    }
  }

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/florine-vnt/words-api/coiffeurs-10"
    )
      .then((response) => response.json())
      .then((data) => {
        // random a number between 0 & 29 (size of the array)
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        setSolution(randomSolution.nom);
        // console.log(randomSolution.nom);
      });
  }, [setSolution]);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <section className="motif-game">
      <header>
        <h3>Mo'tif</h3>
        <img src="./src/assets/images/thierry.png" alt="Thierry Beccaro" />
      </header>
      <div className="grille-jeux">
        <div className="first-letter">L</div>
        <div>.</div>
        <div>.</div>
        <div>I</div>
        <div>.</div>
        <div>.</div>
        <div>H</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
      <MotifGame solution={solution} input={input} />
      <KeyboardContainer input={input} setInput={setInput} />
    </section>
  );
}

export default Motif;
