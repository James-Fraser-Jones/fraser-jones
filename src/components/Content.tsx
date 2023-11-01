export default function Content(props: any) {
  const { children } = props;
  return (
    <div className="p-4 flex flex-col space-y-4">
      {children}
    </div>
  );
}