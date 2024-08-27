import TodoItem from "../ui/TodoItem";

const Todo = () => {
  const todoItems = [
    { state: false, value: "아침 산책하기 아침 산책하기 아침 산책하기 아침 산책하기" },
    { state: true, value: "할 일 2" },
    { state: false, value: "할 일 3" }
  ];
  return (
    <div>
      <ul>
        {todoItems &&
          todoItems.map((item, idx) => <TodoItem key={`todo-${idx}`} item={{ ...item, id: `todo-${idx}` }} />)}
      </ul>
    </div>
  );
};

export default Todo;
