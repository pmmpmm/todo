import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { TodoItemValue } from "@/domain/TodoDomain";

interface TodoItemProps {
  item: TodoItemValue;
  setItemStateUpdate: (id: string, checked: boolean) => void;
  setItemDelete: (id: string) => void;
}

const TodoItem = ({ item, setItemStateUpdate, setItemDelete }: TodoItemProps) => {
  const { state, value, id } = item;
  const [checked, setChecked] = useState<boolean>(state);

  useEffect(() => {
    setItemStateUpdate(id, checked);
  }, [checked]);

  return (
    <li className="flex items-center justify-between px-default-layout-px py-6 border-b border-zinc-100 dark:border-zinc-700/35">
      <label htmlFor={id} className="flex items-center w-full py-1 cursor-pointer">
        <input
          type="checkbox"
          name={id}
          id={id}
          onChange={() => setChecked((prev) => !prev)}
          checked={state}
          className="appearance-none flex-none w-[10px] h-[10px] mt-[-1px] border-solid border border-zinc-300 rounded-md checked:bg-point checked:border-point"
        />
        <span
          className={`pl-4 font-kr tracking-normal relative ${state ? "text-off after:content-[''] after:block after:w-[calc(100%-1rem)] after:h-[1px] after:bg-off after:absolute after:left-4 after:top-[12px]" : "text-on"}`}
        >
          {value}
        </span>
      </label>
      <button className="ml-2" onClick={() => setItemDelete(id)}>
        <CgClose className="w-5 h-5 text-off" />
      </button>
    </li>
  );
};

export default TodoItem;
