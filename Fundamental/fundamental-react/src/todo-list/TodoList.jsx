import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 0,
      text: "Learn JS",
      isCompleted: true,
    },
    {
      id: 1,
      text: "Learn React",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Build a Todo App",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Learn React Router",
      isCompleted: false,
    },
  ];

  //   const todos = data.map((todo) => {
  //     return <Todo key={todo.id} {...todo} />;
  //   });

  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
