import { useRef, useState } from "react";

interface InputProps {
  onSubmit: (value: string) => void;
}

const Input = ({ onSubmit }: InputProps) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
    inputRef.current && inputRef.current.focus();
  };
  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.nativeEvent.isComposing) {
      return;
    }
    if (event.key === "Enter") handleOnSubmit();
  };

  return (
    <div className="px-8 py-5 bg-main border-t border-zinc-200 dark:border-zinc-600/80">
      <div className="flex">
        <input
          type="text"
          onChange={handleOnChangeInput}
          onKeyDown={handleKeyPress}
          value={inputValue}
          ref={inputRef}
          placeholder="할 일을 작성해 주세요."
          className="w-full h-9 pr-4 bg-main font-kr text-on placeholder:text-off focus:outline-none"
        />
        <button
          onClick={handleOnSubmit}
          className="h-9 px-5 py-2 text-sm text-white bg-point rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
