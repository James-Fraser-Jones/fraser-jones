import { Link } from "react-router-dom";
import Banner from "./Banner";

export default function Home() {
  return (
    <div>
      <Banner heading="James Fraser-Jones" subHeading="Software Engineer" subSubHeading="Birmingham, UK"/>
      <div className="p-4 flex flex-col space-y-4">
        <Link className="border-solid border-2 rounded-lg border-paint p-4 block shadow-lg" to={`projects/circuit`}>
          <h3 className="text-xl text-paint ">
            Circuit
          </h3>
          <p>
            An experimental circuit-diagram generator and evaluator for the Lambda calculus
          </p>
        </Link>
        <Link className="border-solid border-2 rounded-lg border-gray-400 p-4 block shadow-lg" to={`/`}>
          <p className="text-gray-400 text-center">
            more projects coming soon..
          </p>
        </Link>
      </div>
    </div>
  );
}