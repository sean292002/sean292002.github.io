import "./Header.css";
import ReactTyped from "react-typed";

export default function Header() {
  return (
    <section className="header">
      <header>
        <h1 className="header-title"> 
            Sean here <span className="header-icon">✋</span>
        </h1>
        <h3 className="header-sub-title"> 
          <ReactTyped
            strings={["Student", "Developer", "Entrepreneur"]}
            typeSpeed={100}
            loop
            backSpeed={100}
            showCursor={true}
            cursorChar="|"
          />
        </h3>
        <div className="header-title-box">
          ⚡ Coding with Passion, Debugging with Purpose ⚡
        </div>
      </header>
    </section>
  );
}
