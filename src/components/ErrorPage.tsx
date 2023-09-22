import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} - ${error.statusText}`;
  } 
  else if (error instanceof Error) {
    errorMessage = error.message;
  } 
  else if (typeof error === "string") {
    errorMessage = error;
  } 
  else {
    errorMessage = "Unknown Error";
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i> <br/>
        <Link to={`/`}>Home</Link> <br/>
      </p>
    </div>
  );
}