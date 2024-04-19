import { useState, useEffect, useRef } from "react";
import KeyboardContainer from "../keyboard/KeyboardContainer";
import TauntGame from "./TauntGame";

function Taunts() {
  const [input, setInput] = useState("");
  const [insult, setInsult] = useState(null);

  async function getInsult() {
    const baseURL =
      "https://my-json-server.typicode.com/brewost/words-api/insults";
    const insultID = Math.ceil(Math.random() * 30);
    const insultURL = `${baseURL}/${insultID}`;
    const response = await fetch(insultURL);
    const newInsult = await response.json();
    setInsult(newInsult);
    // console.log("My new insult", newInsult);
  }

  const initialised = useRef(false);
  useEffect(() => {
    if (!initialised.current) {
      initialised.current = true;
      getInsult();
    }
  }, []);

  return (
    <>
      <h1>Twisted Taunts</h1>
      {!insult ? (
        <div>Loading</div>
      ) : (
        <TauntGame insult={insult} input={input} />
      )}

      <KeyboardContainer input={input} setInput={setInput} />
    </>
  );
}

export default Taunts;
