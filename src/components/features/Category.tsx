import { CategoryItem, CategoryType } from "@/domain/CategoryDomain";

interface CategoryProps {
  setCategory: (category: CategoryType) => void;
  category: CategoryType;
}

const Category = ({ setCategory, category }: CategoryProps) => {
  const categoryBtns = CategoryItem;

  return (
    <div className="px-default-layout-px border-y border-zinc-200">
      <div className="flex justify-between ">
        {categoryBtns.map((btn, idx) => (
          <button
            key={`category-btn${idx}`}
            onClick={() => setCategory(categoryBtns[idx])}
            className={`py-3.5 font-paperlogy-SemiBold text-sm uppercase 
              ${category === categoryBtns[idx] ? " font-paperlogy-Bold text-on" : "font-paperlogy-SemiBoldBold text-off"}`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
