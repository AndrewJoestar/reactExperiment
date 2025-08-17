import Row from "./Row";

export default function Table() {
  return (
    <table border={1}>
      <tbody>
        <Row text="Satu" id={1}></Row>
        <Row text="Dua" id={2}></Row>
        <Row text="Tiga" id={3}></Row>
      </tbody>
    </table>
  );
}
