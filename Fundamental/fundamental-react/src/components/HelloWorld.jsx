export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  );
}

export function HeaderHelloWorld() {
  return <h1>Hello World</h1>;
}

function ParagraphHelloWorld() {
  return <p>This is a simple component that displays a greeting.</p>;
}

// export default HelloWorld;
