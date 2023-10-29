import Button from "./Button";
import Textarea from "./Textarea";

export default function InputPage(props: any) {
  return (
    <div className="p-4 flex flex-col space-y-4">
      <div className="flex space-x-4">
        <Button className="grow" onClick={() => props.setPage("examples")}>
          Example Inputs
        </Button>
        <Button className="grow" onClick={props.reset}>
          Reset
        </Button>
      </div>
      <Textarea className="p-4 placeholder:text-black" rows={1} onChange={props.inputChanged} value={props.input} placeholder='Input' />
      <Button className="w-full" onClick={props.evaluate}>
        ↓ Evaluate ↓
      </Button>
      <Textarea className="grow" rows={6} onChange={props.outputChanged} value={props.output} />
      <div className="flex space-x-4">
        <Button className="grow" onClick={props.downloadOutput}>
          Download Output
        </Button>
        <Button className="grow" onClick={() => props.setPage("help")}>
          What is this?
        </Button>
      </div>
    </div>
  );
}