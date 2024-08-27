import Category from "@/components/features/Category";
import Date from "@/components/features/Date";
import Input from "@/components/features/Input";
import Todo from "@/components/features/Todo";

const AppContent = () => {
  return (
    <div>
      <Date />
      <Category />
      <Todo />
      <Input />
    </div>
  );
};

export default AppContent;
