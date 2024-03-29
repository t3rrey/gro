import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
}

const Input: FC<InputProps> = ({ labelName, ...props }) => {
  return (
    <div className="relative ">
      <label
        htmlFor={props.id || props.name}
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
      >
        {labelName}
      </label>
      <input
        {...props}
        className={clsx(
          "block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
          props.className
        )}
      />
    </div>
  );
};

export default Input;
