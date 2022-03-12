import "./Header.css";
import { useContext } from "react";
import { ColorMode } from "../utility/color-mode";

const Header = () => {
  const colorMode = useContext(ColorMode);
  return (
    <div className={`header${colorMode.isAltColorMode ? "-alt" : ""}`}>
      <h2 className={`title${colorMode.isAltColorMode ? "-alt" : ""}`}>
        SurveyFunneler
      </h2>
      <p
        className={`toggler${colorMode.isAltColorMode ? "-alt" : ""}`}
        onClick={colorMode.switchMode}
      >
        Toggle Color Mode
      </p>
    </div>
  );
};

export default Header;
