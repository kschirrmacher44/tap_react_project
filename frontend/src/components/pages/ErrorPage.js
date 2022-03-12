import Button from "../interface/Button";

const ErrorPage = (props) => {
  return (
    <div>
      <h3>Oops! Something went wrong.</h3>
      <Button type="button" onClick={props.tryAgain}>
        Try Again
      </Button>
      <Button type="button" onClick={props.goBack}>
        Go Back
      </Button>
    </div>
  );
};

export default ErrorPage;
