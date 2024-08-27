import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { TodoItemValue } from "@/domain/TodoDomain";

interface TodoItemProps {
  item: TodoItemValue;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const { state, value, id } = item;
  const [checked, setChecked] = useState<boolean>(state);

  return (
    <li className="flex items-center justify-between px-default-layout-px py-7 border-b border-gray-100 last:border-b-0">
      <label htmlFor={id} className="flex items-center w-full cursor-pointer">
        <input
          type="checkbox"
          name={id}
          id={id}
          onChange={() => {
            setChecked((prev) => !prev);
          }}
          checked={checked}
          className="appearance-none w-[10px] h-[10px] mt-[-1px] border-solid border border-gray-300 rounded-md checked:bg-point checked:border-point"
        />
        <span className={`font-kr pl-4 ${checked ? "text-off" : "text-on"}`}>{value}</span>
      </label>
      <button className="ml-2">
        <CgClose className={`w-5 h-5 ${checked ? "text-off" : "text-on"}`} />
      </button>
    </li>
  );
};

export default TodoItem;
