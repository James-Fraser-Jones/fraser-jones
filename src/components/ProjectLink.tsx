import { Link } from "react-router-dom";
import { ThemeContext } from "../themes";

export default function ProjectLink(props: any) {
  const { title, children, to } = props;
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <Link 
          style={{borderColor: theme.primary}} 
          className={`border-solid border-2 rounded-lg p-4 block shadow-lg`} 
          to={to}
        >
          <h3 style={{color: theme.primary}} className={`text-xl`}>
            {title}
          </h3>
          {children}
        </Link>
      )}
    </ThemeContext.Consumer>
  );
}