import { useContext } from "react";
import SurveyCard from "../interface/SurveyCard";
import Button from "../interface/Button";

const SurveySplash = (props) => {
  return (
    <div>
      <h3>
        Additional credits needed to continue. Please select a payment option.
      </h3>
      <Button onClick={props.creditCardHandler}>Credit Card</Button>
      <Button onClick={props.surveyHandler}>Survey</Button>
    </div>
  );
};

export default SurveySplash;
