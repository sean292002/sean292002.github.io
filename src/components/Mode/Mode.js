import "./Mode.css";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

export default function Mode({ handleModeChange, setMode }) {
  return (
    <section className="container-mode">
      <div className="mode-left white-text">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Pastworks</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
      <button onClick={handleModeChange} className="container-icon">
        {setMode ? (
          <RiMoonFill className="mode-icon" />
        ) : (
          <RiSunFill className="mode-icon" />
        )}
      </button>
    </section>
  );
}
