import React from "react";
import "./App.css";
import ReactHook from "./react-hook.png";
import GetOnlineStatus from "./components/GetOnlineStatus";
import { useTheme } from "./tools";
import ThemeToggler from "./components/ThemeToggler";
import WindowDimensions from "./components/WindowDimensions";
import FetchData from "./components/FetchData";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activePage, setActivePage] = React.useState(0);

  const menu = [
    "Theme Toggler",
    "Get Online Status",
    "Window Dimensions",
    "Fetch Data",
  ];

  const showMenu = () => {
    switch (activePage) {
      case 0:
        return <ThemeToggler theme={theme} toggleTheme={toggleTheme} />;
      case 1:
        return <GetOnlineStatus />;
      case 2:
        return <WindowDimensions />;
      case 3:
        return <FetchData />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className={`App-header ${theme === "light" ? "Light" : "Dark"}`}>
        <img src={ReactHook} className="App-logo" alt="logo" />
        <p>Custom React Hook</p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          {menu.map((item, index) => (
            <button
              key={index}
              className="Button"
              onClick={() => setActivePage(index)}
            >
              {item}
            </button>
          ))}
        </div>

        {showMenu()}
      </header>
    </div>
  );
}

export default App;
