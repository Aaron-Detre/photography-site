import React, { FC, ReactElement, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import PhotoSection from "./components/PhotoSection/PhotoSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Gear from "./components/Gear/Gear";

interface AppProps {}

const App: FC<AppProps> = () => {
  const [page, setPage] = useState("Aaron Detre");
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar selectPage={setPage} />
      </div>
      <div className="content">{chooseContent(page)}</div>
    </div>
  );
};

function chooseContent(page: string): ReactElement {
  switch (page) {
    case "Aaron Detre":
      return <PhotoSection />;
    case "About":
      return <AboutMe />;
    case "Gear":
      return <Gear />;
    default:
      return <></>;
  }
}

export default App;
