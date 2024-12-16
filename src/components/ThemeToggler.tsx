import React from "react";

interface ThemeTogglerProps {
  toggleTheme: () => void;
  theme: string;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ toggleTheme, theme }) => {
  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button className="Button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
