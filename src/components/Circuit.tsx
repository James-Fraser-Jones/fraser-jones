import { ChangeEvent, useState } from 'react';
import { makePostRequest } from "./../request";

export default function Contact() {

  const [input, setInput] = useState("(\\x -> x) (\\y -> y)");
  const [output, setOutput] = useState('');

  const inputChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };
  const outputChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setOutput(event.target.value);
  };

  async function handleClick() {
    console.log(input);
    let newOutput = await makePostRequest(input);
    setOutput(newOutput);
  }

  return (
    <div>
      <textarea className="block w-full border-solid border-2 rounded-lg border-slate-300 focus:border-paint p-4 focus:outline-none font-mono" 
        id="input" 
        placeholder="Input" 
        cols={30} 
        rows={4}
        onChange={inputChanged}
        value={input}
      />
      <button className="block w-full bg-paint p-4 text-white text-2xl my-4 rounded-lg" onClick={handleClick}>Reduce</button>
      <textarea className="block w-full border-solid border-2 rounded-lg border-slate-300 focus:border-paint p-4 focus:outline-none font-mono" 
        id="ouput" 
        placeholder="Output" 
        cols={30} 
        rows={8}
        onChange={outputChanged}
        value={output}
      />
    </div>
  );
}