import { NavLink } from "react-router-dom";
import Confetti from "react-confetti-boom";
import GameOver from "./GameOver";
import "./endmessage.css";

function EndMessage({ endMessage, solution }) {
  return (
    <div className="motif-endmessage">
      {endMessage === "YOU WIN" ? (
        <>
          <div className="well-done-message">
            <p>Bravo, tu as démêlé cette énigme avec succès !</p>
          </div>
          <Confetti
            mode="boom"
            x={0.5}
            y={0.2}
            particleCount={200}
            deg={270}
            shapeSize={18}
            spreadDeg={45}
            effectInterval={2000}
            effectCount={4}
            colors={["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"]}
          />
        </>
      ) : (
        <div className="motif-gameover">
          <GameOver />
        </div>
      )}

      <div className="motif-solution">La solution était {solution}</div>
      <NavLink to="/motif" reloadDocument>
        <button className="motif-button" type="button">
          RESET
        </button>
      </NavLink>
    </div>
  );
}

export default EndMessage;
