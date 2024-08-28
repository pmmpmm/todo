import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import { TodoItemsDomain } from "@/domain/TodoDomain";
import { CategoryType } from "@/domain/CategoryDomain";
import Category from "@/components/features/Category";
import Date from "@/components/features/Date";
import Input from "@/components/features/Input";
import Todo from "@/components/features/Todo";

const AppContent = () => {
  const localTodoItems = JSON.parse(localStorage.getItem("todo-item") as string) as TodoItemsDomain;

  const [itemList, setItemList] = useState<TodoItemsDomain>(localTodoItems.length === 0 ? [] : localTodoItems);
  const [category, setCategory] = useState<CategoryType>("all");
  const [useItemList, setUseItemList] = useState<TodoItemsDomain>([]);
  const todoBody = useRef<HTMLUListElement>(null);

  // 리스트 추가
  const handleCreateItem = (value: string) => {
    if (value === "") return;
    setItemList((prev) => [...prev, { state: false, value, id: uuidv4() }]);
    handleCategory("all");
    // 스크롤 하단 이동
    setTimeout(() => {
      const todoLastItem = todoBody.current?.lastElementChild as HTMLElement;
      todoLastItem.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
    }, 1);
  };

  // 리스트 삭제
  const handleDeleteItem = (id: string) => {
    setItemList((prev) => prev.filter((item) => item.id !== id));
    setUseItemList(itemList);
  };

  //리스트 업데이트
  const handleStateUpdateItem = (id: string, checked: boolean) => {
    setItemList((prev) => prev.map((item) => (item.id === id ? { ...item, state: checked } : item)));
  };

  // 카테고리
  const handleCategory = (category: CategoryType) => {
    setCategory(category);
    // 스크롤 상단 이동
    const todoFirstItem = todoBody.current?.firstElementChild as HTMLElement;
    if (todoFirstItem) todoFirstItem.scrollIntoView({ block: "start" });
  };

  useEffect(() => {
    localStorage.setItem("todo-item", JSON.stringify(itemList));
  }, [itemList]);

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
      <Category setCategory={handleCategory} category={category} />
      <Todo
        ref={todoBody}
        items={useItemList}
        setItemStateUpdate={handleStateUpdateItem}
        setItemDelete={handleDeleteItem}
      />
      <Input onSubmit={handleCreateItem} />
    </div>
  );
};

export default AppContent;
