import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="bg-paint p-4 sticky top-0">
        <Link to={`/`}>
          <h1 className="text-3xl text-white">James Fraser-Jones</h1>
          <h2 className="text-2xl text-white mt-2">Software Engineer</h2>
          <h3 className="text-xl text-white">Birmingham, UK</h3>  
        </Link>
      </div>
      <div className="p-4">
        <Link className="border-solid border-2 rounded-lg border-paint p-4 block" to={`projects/circuit`}>
          <h3 className="text-xl text-paint">
            Circuit
          </h3>
          <ul className="list-disc list-inside mt-2">
            <li>A fully-fledged parser, and call-by-name evaluator, for the Lambda Calculus</li>
            <li>Uses a novel method to generate circuit-like diagrams that clarify the binding structure of lambda terms</li>
          </ul>
        </Link>
      </div>
    </div>
  );
}