import Button from "./Button";
import Content from "./Content";

export default function ExamplesPage(props: any) {
  const examples = [
    { title: "id (I)", expr: "(\\x -> x) T", showTitle: false}
  , { title: "const (K)", expr: `(\\x -> \\y -> x) T U`, showTitle: false}
  , { title: "apply ($)", expr: `(\\f -> \\x -> f x) F X`, showTitle: false}
  , { title: "apply2", expr: `(\\f -> \\x -> \\y -> f x y) F X Y`, showTitle: false}
  , { title: "flip", expr: `(\\f -> \\x -> \\y -> f y x) F X Y`, showTitle: false}
  , { title: "duplicate (S)", expr: `(\\x -> \\y -> \\z -> x z (y x)) X Y Z`, showTitle: false}
  , { title: "loop (ω)", expr: `(\\x -> x x) (\\x -> x x)`, showTitle: false}
  // , { title: "recurse (Y)", expr: `(\\f -> (\\x -> f (x x)) (\\x -> f (x x))) F`} //this causes the evaluator to crash because it gets too big too quickly
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

PlusOne Zero`, showTitle: true}
  ]

  return (
    <Content>
      {examples.map((item, index) => (
        <Button key={index} className="w-full" onClick={() => props.chooseExample(item.expr)}>
          {item.showTitle ? item.title : item.expr}
        </Button>
      ))}
      <Button className="w-full" onClick={() => props.setPage("input")}>
        Back
      </Button>
    </Content>
  );
}