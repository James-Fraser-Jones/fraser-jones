import { Link } from "react-router-dom";
import { ThemeContext } from "../themes";

export default function Banner(props: any) {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div style={{backgroundColor: theme.primary}} className={`p-4 sticky top-0 drop-shadow-lg`}>
          <Link to={`/`}>
            <h1 className="text-3xl font-cursive text-white">{props.heading}</h1>
            <h2 className="text-2xl text-white mt-2">{props.subHeading}</h2>
            <h3 className="text-xl text-white">{props.subSubHeading}</h3>  
          </Link>
        </div> 
      )}
    </ThemeContext.Consumer>
  );
}