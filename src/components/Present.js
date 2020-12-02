import "./Present.css";
import { Link } from "react-router-dom";

function Present() {
  return (
    <>
      <h1>Present Time! Present Time!</h1>
      <button className="button">
        <Link to="/present">🎁 Click me to open 🎁</Link>
      </button>
    </>
  );
}

export default Present;
