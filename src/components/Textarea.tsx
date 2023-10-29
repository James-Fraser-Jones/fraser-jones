export default function Textarea(props: any) {
  const { className, value, onChange, rows, cols, placeholder } = props;
  return (
    <textarea
      className={className + " block w-full border-solid border-2 rounded-lg border-slate-300 focus:border-paint focus:outline-none font-mono leading-5 tracking-tight whitespace-pre"}
      value={value}
      onChange={onChange}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
    />
  );
}