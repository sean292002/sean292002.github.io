import "./App.css";
import { useState } from "react";

import { Footer } from "../../components/Footer/Footer";
import Works from "../../components/Works/Works";
import WorksMode from "../../components/Mode/WorksMode";

function Project({project}) {
  let whiteModeValue;
  const storage = localStorage.getItem('whiteMode');
  if(!storage){
    whiteModeValue = false;
  }else{
    whiteModeValue = localStorage.getItem('whiteMode') === 'true' ? true : false;
  }
  const [whiteMode, setQuietMode] = useState(whiteModeValue);

  return (
    <div className={whiteMode ? "white-mode" : "dark-mode"}>
      <WorksMode setMode={whiteMode}/>
      <Works project={project} />
      <Footer /> 
    </div>
  );
}

export default Project;
