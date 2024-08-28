import { CategoryItem, CategoryType } from "@/domain/CategoryDomain";
import { useState } from "react";

interface CategoryProps {
  setCategory: (category: CategoryType) => void;
}

const Category = ({ setCategory }: CategoryProps) => {
  const [activeBtn, setActiveBtn] = useState(0);
  const categoryBtns = CategoryItem;

  const handleOnClick = (idx: number) => {
    setActiveBtn(idx);
    setCategory(categoryBtns[idx]);
  };

  return (
    <div className="px-default-layout-px border-y border-zinc-200">
      <div className="flex justify-between ">
        {categoryBtns.map((btn, idx) => (
          <button
            key={`category-btn${idx}`}
            onClick={() => handleOnClick(idx)}
            className={`py-3.5 font-paperlogy-SemiBold text-sm uppercase ${activeBtn === idx ? " font-paperlogy-Bold text-on" : "font-paperlogy-SemiBoldBold text-off"}`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
