import "./App.css";
import { useState } from "react";

import Mode from "../../components/Mode/Mode";
import Header from "../../components/Header/Header";
import { About } from "../../components/About/About";
import { Footer } from "../../components/Footer/Footer";
import Skills from "../../components/Skills/Skills";
import Pastwork from "../../components/Pastworks/Pastwork";
import { Contact } from "../../components/Contact/Contact";
import Blogs from "../../components/Blog/blog";

function Home() {
  let whiteModeValue;
  const storage = localStorage.getItem('whiteMode');
  if(!storage){
    whiteModeValue = false;
  }else{
    whiteModeValue = localStorage.getItem('whiteMode') === 'true' ? true : false;
  }
  const [whiteMode, setQuietMode] = useState(whiteModeValue);

  const handleModeChange = () => {
    const changed = !whiteMode;
    setQuietMode(changed);
    localStorage.setItem('whiteMode', changed);
  };

  return (
    <div className={whiteMode ? "white-mode" : "dark-mode"}>
      <Mode setMode={whiteMode} handleModeChange={handleModeChange} />
      <Header />
      <About />
      <Skills />
      <Pastwork />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
