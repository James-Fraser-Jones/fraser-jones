import { ChangeEvent, useState } from 'react';
import { makePostRequest, downloadTextFile } from "../utils";
import { Link } from "react-router-dom";

export default function Circuit() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState('\n  Output');
  const [page, setPage] = useState("input");

  const inputChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };
  const outputChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setOutput(event.target.value);
  };

  async function evaluate() {
    console.log(input);
    let newOutput = await makePostRequest(input);
    setOutput(newOutput);
  }

  function reset() {
    setInput("");
    setOutput("\n  Output");
  }

  function chooseExample(example: string) {
    setInput(example);
    setOutput("");
    setPage("input");
  }

  function downloadOutput() {
    downloadTextFile("Output.txt", output);
  }

  const pageProps = {
    setPage,

    chooseExample,
    downloadOutput,
    evaluate,
    reset,
    
    outputChanged,
    inputChanged,
    
    input,
    output,
  }

  return (
    <div>
      <div className="bg-paint p-4">
        <Link to={`/`}>
          <h1 className="text-3xl text-white">Circuit</h1>
          <h2 className="text-2xl text-white mt-2">Lambda calculus evaluator</h2>
          <h3 className="text-xl text-white">Diagram generator</h3>  
        </Link>
      </div>
      {page === "input"    ? <InputPage {...pageProps}/> : 
       page === "examples" ? <ExamplesPage {...pageProps}/> :
       page === "help"     ? <HelpPage {...pageProps}/> : "Error: Invalid Page"
      }
    </div>
  );
}

const InputPage = (props: any) => {
  return (
    <div className="p-4 flex flex-col space-y-4">
      <div className="flex space-x-4">
          <button className="block bg-paint p-4 text-white text-l rounded-lg grow" onClick={() => props.setPage("examples")}>Example Inputs</button>
          <button className="block bg-paint p-4 text-white text-l rounded-lg px-8" onClick={props.reset}>Reset</button>
      </div>
      <textarea className="block w-full border-solid border-2 rounded-lg border-slate-300 focus:border-paint focus:outline-none font-mono leading-5 tracking-tight whitespace-pre p-4 placeholder:text-black"
        cols={30} 
        rows={4}
        onChange={props.inputChanged}
        value={props.input}
        placeholder='Input'
      />
      <button className="block bg-paint p-4 text-white text-l rounded-lg w-full" onClick={props.evaluate}>↓ Evaluate ↓</button>
      <textarea className="block w-full border-solid border-2 rounded-lg border-slate-300 focus:border-paint focus:outline-none font-mono leading-5 tracking-tight whitespace-pre"
        cols={30} 
        rows={8}
        onChange={props.outputChanged}
        value={props.output}
      />
      <div className="flex space-x-4">
        <button className="block bg-paint p-4 text-white text-l rounded-lg grow" onClick={props.downloadOutput}>Download Output</button>
        <button className="block bg-paint p-4 text-white text-l rounded-lg grow" onClick={() => props.setPage("help")}>What is this?</button>
      </div>
    </div>
  );
}

const ExamplesPage = (props: any) => {
  const examples = [
    { title: "id (I)", expr: `(\\x -> x) T`}
  , { title: "const (K)", expr: `(\\x -> \\y -> x) T U`}
  , { title: "apply ($)", expr: `(\\f -> \\x -> f x) F X`}
  , { title: "apply2", expr: `(\\f -> \\x -> \\y -> f x y) F X Y`}
  , { title: "flip", expr: `(\\f -> \\x -> \\y -> f y x) F X Y`}
  , { title: "duplicate (S)", expr: `(\\x -> \\y -> \\z -> x z (y x)) X Y Z`}
  , { title: "loop (ω)", expr: `(\\x -> x x) (\\x -> x x)`}
  // , { title: "recurse (Y)", expr: `(\\f -> (\\x -> f (x x)) (\\x -> f (x x))) F`}
  , { title: "2 + 3", expr: `(\\zero ->
(\\plusOne ->
(\\add ->

(\\two ->
(\\three ->

add two three

) (plusOne (plusOne (plusOne zero)))
) (plusOne (plusOne zero))

) (\\n m -> n plusOne m)
) (\\n s z -> s (n s z))
) (\\s z -> z) 

PlusOne Zero`}
  ]

  return (
    <div className="p-4 flex flex-col space-y-4">
      {examples.map((item, index) => (
        <button 
          key={index} 
          className="block bg-paint p-4 text-white text-l rounded-lg w-full" 
          onClick={() => props.chooseExample(item.expr)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

const HelpPage = (props: any) => {
  return (
    <div className="p-4">
      Help Help Help
      <button className="block bg-paint p-4 mt-4 text-white text-l rounded-lg w-full" onClick={() => props.setPage("input")}>Go Back</button>
    </div>
  );
}


