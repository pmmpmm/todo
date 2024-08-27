import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { TodoItemsDomain } from "@/domain/TodoDomain";
import Category from "@/components/features/Category";
import Date from "@/components/features/Date";
import Input from "@/components/features/Input";
import Todo from "@/components/features/Todo";

const AppContent = () => {
  const [itemList, setItemList] = useState<TodoItemsDomain>([]);
  const handleOnSubmit = (value: string) => {
    setItemList((prev) => [...prev, { state: false, value, id: uuidv4() }]);
  };

  useEffect(() => {
    console.log(itemList);
  });
  return (
    <div>
      <Date />
      <Category />
      <Todo items={itemList} />
      <Input onSubmit={handleOnSubmit} />
    </div>
  );
};

export default AppContent;
