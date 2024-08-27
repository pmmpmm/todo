import { TodoItemsDomain } from "@/domain/TodoDomain";
import TodoItem from "@/components/ui/TodoItem";

interface TodoProps {
  items: TodoItemsDomain;
}

const Todo = ({ items }: TodoProps) => {
  return (
    <div>
      <ul>{items && items.map((item, idx) => <TodoItem key={`todo-${idx}`} item={item} />)}</ul>
    </div>
  );
};

export default Todo;
