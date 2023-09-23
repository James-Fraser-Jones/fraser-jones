import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="font-sans font-medium">
      <div className="bg-paint p-4">
        <Link to={`/`}>
          <h1 className="text-3xl text-white">James Fraser-Jones</h1>
          <h2 className="text-2xl text-white mt-2">Software Engineer</h2>
          <h3 className="text-xl text-white">London, UK</h3>  
        </Link>
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
