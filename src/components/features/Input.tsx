import { useState } from "react";

interface InputProps {
  onSubmit: (value: string) => void;
}

const Input = ({ onSubmit }: InputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
  };
  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") handleOnSubmit();
  };

  return (
    <div className="px-8 py-5 border-t border-zinc-200">
      <div className="flex">
        <input
          type="text"
          onChange={handleOnChangeInput}
          onKeyDown={handleKeyDown}
          value={inputValue}
          placeholder="할 일을 작성해 주세요."
          className="w-full h-9 pr-4 font-kr placeholder:text-zinc-300 focus:outline-none"
        />
        <button onClick={handleOnSubmit} className="h-9 px-5 py-2 text-sm text-white bg-point rounded">
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
