import { TodoItemsDomain } from "@/domain/TodoDomain";
import TodoItem from "@/components/ui/TodoItem";

interface TodoProps {
  items: TodoItemsDomain;
  setListStateUpdate: (id: string, checked: boolean) => void;
}

const Todo = ({ items, setListStateUpdate }: TodoProps) => {
  return (
    <div>
      <ul>
        {items &&
          items.map((item, idx) => {
            return <TodoItem key={`todo-${idx}`} item={item} setListStateUpdate={setListStateUpdate} />;
          })}
      </ul>
    </div>
  );
};

export default Todo;
