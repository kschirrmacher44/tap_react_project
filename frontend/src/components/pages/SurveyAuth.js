import Button from "../interface/Button";

const SurveyAuth = (props) => {
  return (
    <div>
      <h3>Please enter your User ID to check for available surveys.</h3>
      <form onSubmit={props.formSubmitHandler}>
        {props.children}
        <Button type="submit" disabled={!props.formState.isValid}>
          Submit
        </Button>
        <Button onClick={props.goBack}>Go Back</Button>
      </form>
    </div>
  );
};

export default SurveyAuth;
