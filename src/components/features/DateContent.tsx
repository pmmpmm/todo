import { MdWbSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { useThemeContext } from "@/context/ThemeContext";

const DateContent = () => {
  const { theme, toggleTheme } = useThemeContext();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const now = new (Date as any)();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const day = now.getDay();

  return (
    <div className="flex items-start justify-between px-default-layout-px pt-11 pb-10">
      <div>
        <p className="font-paperlogy-Medium text-sm text-off">
          {monthNames[month]} {date}, {year}
        </p>
        <p className="pt-2 text-on text-[32px]">{dayNames[day]}</p>
      </div>
      <button onClick={toggleTheme} className="-mt-[1px] flex-none w-7 h-7 text-center">
        {theme ? (
          <MdWbSunny className="m-auto text-point" size="90%" />
        ) : (
          <IoIosMoon className="m-auto text-point" size="95%" />
        )}
      </button>
    </div>
  );
};

export default DateContent;
