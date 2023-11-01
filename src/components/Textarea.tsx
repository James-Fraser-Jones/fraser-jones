import { useState } from "react";
import { ThemeContext } from "../themes";

export default function Textarea(props: any) {
  const { className, value, onChange, rows, cols, placeholder } = props;

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <textarea
          className={`${className} block w-full border-solid border-2 rounded-lg border-slate-300 focus:outline-none font-mono leading-5 tracking-tight whitespace-pre`}
          value={value}
          onChange={onChange}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{borderColor: isFocused ? theme.primary : "white"}}
        />
      )}
    </ThemeContext.Consumer>
  );
}