import React, { useState, useCallback, useContext } from "react";
import SurveyCard from "./components/interface/SurveyCard";
import Input from "./components/interface/Input";
import Header from "./components/interface/Header";
import SurveySplash from "./components/pages/SurveySplash";
import SurveyAuth from "./components/pages/SurveyAuth";
import CreditCard from "./components/pages/CreditCard";
import SurveyAuthResult from "./components/pages/SurveyAuthResult";
import ErrorPage from "./components/pages/ErrorPage";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MAXLENGTH,
} from "./components/utility/validators";
import { ColorMode } from "./components/utility/color-mode";
import "./App.css";

const App = () => {
  const [formState, setFormState] = useState({
    value: "",
    isValid: false,
  });
  const [offerState, setOfferState] = useState(null);
  const [surveyToggle, setSurveyToggle] = useState(false);
  const [creditCardToggle, setCreditCardToggle] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const colorMode = useContext(ColorMode);
  const [isAltColorMode, setIsAltColorMode] = useState();

  const switchMode = () => {
    setIsAltColorMode((prevMode) => !prevMode);
  };

  const inputHandler = useCallback((value, isValid) => {
    setFormState({
      value: value,
      isValid: isValid,
    });
  }, []);

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const url = process.env.REACT_APP_BACKEND_URL;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: formState.value }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setOfferState(responseData.offer);
        setSurveyToggle(false);
      } else {
        setErrorState(true);
        setSurveyToggle(false)
      }
    } catch (err) {
      console.log(err);
      setErrorState(true);
    }
  };

  const creditCardHandler = (event) => {
    event.preventDefault();

    setCreditCardToggle(true);
  };

  const surveyHandler = (event) => {
    event.preventDefault();
    setSurveyToggle(true);
  };

  const goBack = (event) => {
    event.preventDefault();
    setSurveyToggle(false);
    setCreditCardToggle(false);
    setOfferState(false);
    setErrorState(false);
  };

  const tryAgain = (event) => {
    event.preventDefault();
    setErrorState(false);
  };

  console.log(offerState);

  return (
    <ColorMode.Provider
      value={{
        isAltColorMode,
        switchMode,
      }}
    >
      <Header />
      <SurveyCard className={`survey${colorMode.isAltColorMode ? "-alt" : ""}`}>
        {!surveyToggle && !creditCardToggle && !offerState && (
          <SurveySplash
            creditCardHandler={creditCardHandler}
            surveyHandler={surveyHandler}
          />
        )}
        {creditCardToggle && <CreditCard goBack={goBack} />}
        {surveyToggle && !errorState && (
          <SurveyAuth
            formState={formState}
            formSubmitHandler={formSubmitHandler}
            goBack={goBack}
            onInput={inputHandler}
          >
            <Input
              type="text"
              id="user"
              placeholder="User ID"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(32)]}
              errorText="Please enter a valid User ID."
              onInput={inputHandler}
            />
          </SurveyAuth>
        )}
        {offerState && (
          <SurveyAuthResult offerState={offerState} goBack={goBack} />
        )}
        {errorState && <ErrorPage tryAgain={tryAgain} goBack={goBack} />}
      </SurveyCard>
    </ColorMode.Provider>
  );
};

export default App;
