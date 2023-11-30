import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type CounterProps = {
  title: string;
  subtitle?: string;
  value: number;
  onChange: (value: number) => void;
};

const Counter = ({ title, subtitle, value, onChange }: CounterProps) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex flex-col">
        <div className="font-medium text-textLight dark:text-textDark">
          {title}
        </div>
        <div className="font-light text-textLight2nd dark:text-textDark2nd">
          {subtitle}
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={onReduce}
          className="w-10 h-10 rounded-full border-[1px] border-divideLight dark:border-divideDark flex items-center justify-center text-textLight2nd dark:text-textDark2nd cursor-pointer hover:opacity-80 transition"
        >
          <AiOutlineMinus />
        </button>

        <div className="font-light text-xl text-neutral-600">{value}</div>

        <button
          onClick={onAdd}
          className="w-10 h-10 rounded-full border-[1px] border-divideLight dark:border-divideDark flex items-center justify-center text-textLight2nd dark:text-textDark2nd cursor-pointer hover:opacity-80 transition"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
