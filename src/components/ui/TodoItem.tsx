import { useState } from "react";
import { CgClose } from "react-icons/cg";

interface TodoItemProps {
  item: { state: boolean; id: string; value: string };
}

const TodoItem = ({ item }: TodoItemProps) => {
  const { state, id, value } = item;
  const [checked, setChecked] = useState<boolean>(state);

  return (
    <li className="flex items-center justify-between px-default-layout-px py-7 border-b border-gray-100 last:border-b-0">
      <label htmlFor={id} className="flex items-center">
        <input
          type="checkbox"
          name={id}
          id={id}
          onChange={() => {
            setChecked((prev) => !prev);
          }}
          checked={checked}
          className="appearance-none w-[10px] h-[10px] mt-[-1px] border-solid border border-gray-300 rounded-md checked:bg-point-color checked:border-point-color"
        />
        <span className={`font-kr pl-4 ${checked ? "text-zinc-300" : "text-zinc-600"}`}>{value}</span>
      </label>
      <button className="ml-2">
        <CgClose className={`w-5 h-5 ${checked ? "text-zinc-300" : "text-zinc-600"}`} />
      </button>
    </li>
  );
};

export default TodoItem;
