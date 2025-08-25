import React, { FC, ReactElement, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import PhotoSection from "./components/PhotoSection/PhotoSection";
// import AboutMe from "./components/AboutMe/AboutMe";
import Gear from "./components/Gear/Gear";
import CarouselView from "./components/CarouselView/CarouselView";

interface AppProps {}

const App: FC<AppProps> = () => {
  const [page, setPage] = useState("Home");
  const [carousel, setCarousel] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  let view: ReactElement;
  if (carousel === "") {
    view = (
      <div className={`container ${isDarkMode ? "darkMode" : ""}`}>
        <Sidebar
          currentPage={page}
          selectPage={setPage}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <div>{chooseContent(page, setCarousel)}</div>
      </div>
    );
  } else {
    view = (
      <CarouselView
        currentPhoto={carousel}
        setCarousel={setCarousel}
        isDarkMode={isDarkMode}
      />
    );
  }

  return view;
};

function chooseContent(page: string, setCarousel: Function): ReactElement {
  const photoSection = <PhotoSection setCarousel={setCarousel} />;
  switch (page) {
    case "Aaron Detre":
      return photoSection;
    case "Home":
      return photoSection;
    // case "About":
    //  return <AboutMe />;
    case "Gear":
      return <Gear />;
    default:
      return <></>;
  }
}

export default App;
