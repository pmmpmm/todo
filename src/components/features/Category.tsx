import { useState } from "react";

const Category = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const categoryBtns = ["all", "active", "completed"];

  const handleOnClick = (idx: number) => {
    setActiveBtn(idx);
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
