const ThemeSwitcher = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="button" onClick={toggleTheme}>
      Cambiar a {theme === "light" ? "Oscuro" : "Claro"}
    </button>
  );
};

export default ThemeSwitcher;
