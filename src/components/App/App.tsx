import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="font-sans font-medium max-w-4xl mx-auto">
      <Outlet />
    </div>
  );
}
