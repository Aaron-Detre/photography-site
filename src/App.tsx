import React, { FC, ReactElement, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import PhotoSection from "./components/PhotoSection/PhotoSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Gear from "./components/Gear/Gear";

interface AppProps {}

const App: FC<AppProps> = () => {
  const [page, setPage] = useState("home");
  let content: ReactElement = <></>;
  switch (page) {
    case "home":
      content = <PhotoSection />;
      break;
    case "about":
      content = <AboutMe />;
      break;
    case "gear":
      content = <Gear />;
      break;
  }
  return (
    <div className="App">
      <Sidebar selectPage={setPage} />
      {content}
    </div>
  );
};

export default App;
