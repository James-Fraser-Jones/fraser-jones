import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link className="border-solid border-2 rounded-lg border-paint p-4 inline-block" to={`projects/circuit`}>
        <h3 className="text-xl text-paint">
          Circuit
        </h3>
        <ul className="list-disc list-inside mt-2">
          <li>A fully-fledged parser, and call-by-name evaluator, for the Lambda Calculus</li>
          <li>Uses a novel method to generate circuit-like diagrams that clarify the binding structure of lambda terms</li>
        </ul>
      </Link>
    </div>
  );
}