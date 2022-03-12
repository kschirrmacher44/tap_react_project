import React from "react";
import Button from "../interface/Button";

const SurveyAuthResult = (props) => {
  const openSurvey = (event) => {
    event.preventDefault();
    window.open(offerState.offer_url);
  };

  const { offerState } = props;

  return (
    <React.Fragment>
      {offerState.has_offer && (
        <div>
          <h3>{offerState.message_hash.offer_entry}</h3>
          <p>
            Minimum reward: {offerState.message_hash.min_payout_in_currency}
          </p>
          <p>
            Maximum reward: {offerState.message_hash.max_payout_in_currency}
          </p>
          <Button type="button" onClick={openSurvey}>
            Take Survey
          </Button>
          <Button type="button" onClick={props.goBack}>
            Go Back
          </Button>
        </div>
      )}
      {!offerState.has_offer && (
        <div>
          <h3>{offerState.message_hash.no_offer}</h3>
        </div>
      )}
    </React.Fragment>
  );
};

export default SurveyAuthResult;
