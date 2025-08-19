export default function AllertButton({ text, message }) {
  function handleClick(e) {
    console.info(e);
    alert(message);
  }

  return <button onClick={handleClick}>{text}</button>;
}
