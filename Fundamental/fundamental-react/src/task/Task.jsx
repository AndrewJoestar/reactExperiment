import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Task() {
  const [items, setItems] = useImmer([]);
  function handleOnSubmit(item) {
    setItems((items) => {
      items.push(item);
    });
  }

  return (
    <div>
      <TaskForm onSubmit={handleOnSubmit}></TaskForm>
      <TaskList items={items}></TaskList>
    </div>
  );
}
