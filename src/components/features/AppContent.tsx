import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { TodoItemsDomain } from "@/domain/TodoDomain";
import Category from "@/components/features/Category";
import Date from "@/components/features/Date";
import Input from "@/components/features/Input";
import Todo from "@/components/features/Todo";
import { CategoryType } from "@/domain/CategoryDomain";

const AppContent = () => {
  const [itemList, setItemList] = useState<TodoItemsDomain>([]);
  const [category, setCategory] = useState<CategoryType>("all");
  const [useItemList, setUseItemList] = useState<TodoItemsDomain>([]);

  // 리스트 추가
  const handleOnSubmit = (value: string) => {
    setItemList((prev) => [...prev, { state: false, value, id: uuidv4() }]);
  };
  //리스트 업데이트
  const handleListStateUpdate = (id: string, checked: boolean) => {
    setItemList((prev) => prev.map((item) => (item.id === id ? { ...item, state: checked } : item)));
  };
  // 카테고리
  const handleCategory = (category: CategoryType) => {
    setCategory(category);
  };

  useEffect(() => {
    switch (category) {
      case "all":
        setUseItemList(itemList);
        break;
      case "active":
        setUseItemList(itemList.filter((item) => item.state === true));
        break;
      case "completed":
        setUseItemList(itemList.filter((item) => item.state !== true));
        break;
      default:
        throw new Error(`허용하지 않는 카테고리입니다. ${category}`);
    }
  }, [category, itemList]);

  return (
    <div>
      <Date />
      <Category setCategory={handleCategory} />
      <Todo items={useItemList} setListStateUpdate={handleListStateUpdate} />
      <Input onSubmit={handleOnSubmit} />
    </div>
  );
};

export default AppContent;
