import { useContext } from "react";
import { ColorMode } from "../utility/color-mode";

import "./SurveyCard.css";

const SurveyCard = (props) => {
  const colorMode = useContext(ColorMode);
  return (
    <div className={`surveyCard${colorMode.isAltColorMode ? "-alt" : ""}`}>
      {props.children}
    </div>
  );
};

export default SurveyCard;
