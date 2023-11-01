import { ThemeContext } from "../themes";

export default function Button(props: any) {
  const { className, onClick, children } = props;
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <button 
          style={{backgroundColor: theme.primary}}
          className={`${className} block p-4 text-white text-l rounded-lg shadow-lg`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}