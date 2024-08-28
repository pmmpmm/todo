import { TodoItemsDomain } from "@/domain/TodoDomain";
import TodoItem from "@/components/ui/TodoItem";
import { forwardRef } from "react";

interface TodoProps {
  items: TodoItemsDomain;
  setItemStateUpdate: (id: string, checked: boolean) => void;
  setItemDelete: (id: string) => void;
}

const Todo = forwardRef<HTMLUListElement, TodoProps>(({ items, setItemStateUpdate, setItemDelete }, ref) => {
  return (
    <ul ref={ref} className="item-list-body h-[450px] overflow-auto">
      {items &&
        items.map((item, idx) => {
          return (
            <TodoItem
              key={`todo-${idx}`}
              item={item}
              setItemStateUpdate={setItemStateUpdate}
              setItemDelete={setItemDelete}
            />
          );
        })}
    </ul>
  );
});

export default Todo;
