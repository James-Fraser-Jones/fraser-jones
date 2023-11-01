import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";
import { ThemeContext } from "../themes";

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
    <ThemeContext.Consumer>
      {(theme) => (
        <div className="font-sans font-medium">
          <div className="p-4">
            <Link to={`/`}>
              <h1 className="text-3xl">Oops!</h1>
              <h2 style={{color: theme.primary}}>An Error Has Occured</h2>
            </Link>
          </div>
          <div className="p-4">
            <strong>{errorMessage}</strong>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}