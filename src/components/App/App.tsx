import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="font-sans font-medium">
      <h1 className="text-3xl">James Fraser-Jones</h1>
      <h2 className="text-2xl text-paint">Software Engineer</h2>
      <Link to={`/`}>Home</Link> <br/>
      <Link to={`projects/`}>Projects</Link> <br/>
      <Link to={`projects/circuit`}>Circuit</Link>
      <Outlet />
    </div>
  );
}
