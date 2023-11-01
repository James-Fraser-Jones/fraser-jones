import Button from "./Button";
import Content from "./Content";

export default function HelpPage(props: any) {
  return (
    <Content>
      <p>
        Lambda calculus is a mathematical system for expressing computations, based purely on the definition and usage of functions
      </p>
      <p>
        This project takes lambda expressions as input, and generates circuit diagrams which explicitly connect bound variables to their binders, using wires
      </p>
      <p>
        A basic understanding of lambda calculus is assumed in the following explanation of circuit diagrams
      </p>
      <p>As a first example, let's look at the identity function, as a lambda expression, applied to some arbitrary lambda expression, "T"</p>
      <pre>(\x -&gt; x) T</pre>
      <p>this simply reduces to:</p>
      <pre>T</pre>
      <p>As a circuit diagram, the reduction looks like this:</p>
      <div>
        <pre>┏━━━┓      ╔══════╗</pre>
        <pre>┃ T ┠──&gt; &gt;─╫───┐  ║</pre>  
        <pre>┗━━━┛      ║   ██ ║</pre>
        <pre>           ╚══════╝</pre>
        <pre></pre>
        <pre>T</pre>
      </div>
      <p>Reduction steps are placed vertically, one after another, so the "T" at the bottom here is the result of applying the identity function to the input</p>
      <p>Graphically, one could imagine the "T" flowing out of its box, to the right, then flowing along the wire and landing in the black box that is present within the larger double-striped box</p>
      <p>The double striped box represents the scope of the identity function</p>
      <p>As a slightly more elaborate example, we can look at the following:</p>
      <pre>(\x -&gt; x x) T</pre>
      <p>Which reduces to:</p>
      <p>T T</p>
      <p>As a circuit diagram:</p>
      <div>
        <pre>           ╔════════════════╗  </pre>
        <pre>┏━━━┓      ║ ┌───┬───────┐  ║  </pre>
        <pre>┃ T ┠──&gt; &gt;─╫─┘ ┏━┿━━┓    │  ║</pre>  
        <pre>┗━━━┛      ║   ┃ ██ ┠──&gt; ██ ║  </pre>  
        <pre>           ║   ┗━━━━┛       ║  </pre>
        <pre>           ╚════════════════╝  </pre>
        <pre>                               </pre>
        <pre>┏━━━┓                          </pre>
        <pre>┃ T ┠──&gt; T                  </pre>
        <pre>┗━━━┛                          </pre>      
      </div>
      <p>Based on the original example, it should hopefully be clear how the first diagram reduces to the second</p>
      <p>The algorithm for generating these circuit diagrams is "complete" in the sense that it can correctly generate a unique diagram for each alpha-equivalent lambda expression</p>
      <p>This project is written in Haskell and hosted using Node.js and AWS EC2</p>
      <Button className="w-full" onClick={() => props.setPage("input")}>
        Back
      </Button>
    </Content>
  );
}