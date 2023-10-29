import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="font-sans2 font-normal max-w-4xl mx-auto">
      <Outlet />
    </div>
  );
}
