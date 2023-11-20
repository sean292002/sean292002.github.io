import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home/index";
import Project from "../containers/Project";

import INFO from "../constants/user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
          {INFO.projects.map((project) => (
            <Route
              key={project.slug}
              path={`/project/${project.slug}`}
              element={<Project key={project.slug} project={project}/>}
            />
          ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
