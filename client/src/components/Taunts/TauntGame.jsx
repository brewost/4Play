import { useState, useEffect } from "react";

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
function scrambledInsult(insult) {
  const arr = insult.slang.split(""); // Convert String to array
  const n = arr.length; // Length of the array

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n - 1; i++) {
    const j = getRandomInt(n); // Get random of [0, n-1]

    const temp = arr[i]; // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
  }

  const anagramInsult = arr.join(""); // Convert Array to string
  return anagramInsult;
}

function emptyAnswer(insult) {
  //   const length = insult.slang.length;
  //   const arr = new Array(length).fill("-").join();
  //     return arr;

  return new Array(insult.slang.length).fill("-").join("");
}
function TauntGame({ insult, input }) {
  // eslint-disable-next-line no-unused-vars
  const [anagram, setAnagram] = useState(scrambledInsult(insult));

  const [answer, setAnswer] = useState(emptyAnswer(insult));

  useEffect(() => {
    //  make input appear in empty answer here using setAnswer add logic to stop extra chars.
    if (input.length <= answer.length) {
      const latestInputLetter = input[input.length - 1];
      const answerArray = answer.split("");
      answerArray[input.length - 1] = latestInputLetter;
      const newAnswer = answerArray.join("");
      setAnswer(newAnswer);
    }

    // console.log("My input", input);
    // console.log("My insult", insult.slang);

    if (!answer.includes("-")) {
      if (input === insult.slang.toLowerCase()) {
        // console.log("Hi there, wassup ?");
      }
    }

    // if (input=== answer) {
    //   console.log(input, answer);
    //   if (input === answer) {
    //     console.log("confetti");
    //   } else {
    //     console.log("you suck");
    //   }
    // }
  }, [input, answer, insult.slang]);

  return (
    <>
      <h1>{anagram.toUpperCase()}</h1>
      <h1>{answer}</h1>
      <div>{input}</div>
    </>
  );
}

export default TauntGame;
