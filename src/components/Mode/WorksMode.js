import "./Mode.css";
import { Link } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

export default function WorksMode({ handleModeChange, setMode }) {
  return (
    <section className="container-mode">
      <div className="mode-left white-text">
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
        </ul>
      </div>
      <Link to={'/'}>
        <button onClick={handleModeChange} className="container-icon">
            <RiCloseLine className="mode-icon" />
        </button>
      </Link>

    </section>
  );
}
