export default function Button(props: any) {
  const { className, onClick, children } = props;
  return (
    <button 
      className={className + " block bg-paint p-4 text-white text-l rounded-lg shadow-lg"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}