import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show2, setShow2] = useState(true);

  function handleChange(e) {
    setShow2(e.target.checked);
  }

  return (
    <div>
      {/* {show2 ? <Counter name={"Bobby"}></Counter> : <h1>HIDUP JOE COW WE</h1>} */}
      {/* {show2 ? (
        <div>
          <Counter name={"Bobby"}></Counter>
        </div>
      ) : (
        <section>
          <Counter name={"KKK"}></Counter>
        </section>
      )} */}
      {/* {!show2 && <Counter name={"KKK"}></Counter>}
      {show2 && <Counter name={"Anjay"}></Counter>} */}
      {show2 ? (
        <Counter name={"Bobby"} key={"b"}></Counter>
      ) : (
        <Counter name={"KKK"} key={"a"}></Counter>
      )}
      <input type="checkbox" onChange={handleChange} checked={show2} />
      Tampilkan Counter 2
    </div>
  );
}
