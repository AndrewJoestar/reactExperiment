import "./HelloWorld.css";

export default function HelloWorld() {
  const props = {
    text: "This is a simple component that displays a greeting ye yeah.",
  };
  return (
    <div>
      <HeaderHelloWorld text="Hello World" />
      <JsInJSX />
      <ParagraphHelloWorld {...props} />
    </div>
  );
}

// Fragmented components
export function HeaderHelloWorld({ text = "Default text" }) {
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld({ ...props }) {
  return <p className="content">{props.text}</p>;
}

function JsInJSX() {
  const contoh = "Hello World";
  return <p>{contoh.toLowerCase()}</p>;
}

// export default HelloWorld;
