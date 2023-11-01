import { ChangeEvent, useState } from 'react';
import { makePostRequest, downloadTextFile } from "../utils";

import Banner from "./Banner";
import HelpPage from './HelpPage';
import ExamplesPage from './ExamplesPage';
import InputPage from './InputPage';

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

  // https://stackoverflow.com/questions/7060009/css-max-height-remaining-space
  return (
    <div>
      <Banner heading="Circuit" subHeading="Lambda calculus evaluator" subSubHeading="Diagram generator"/>
      { page === "input"    ? <InputPage {...pageProps}/> : 
        page === "examples" ? <ExamplesPage {...pageProps}/> :
        page === "help"     ? <HelpPage {...pageProps}/> : 
        "Error: Invalid Page"
      }
    </div>
  );
}



