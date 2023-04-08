import { FC, InputHTMLAttributes } from "react";

export interface SelectInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  labelName: string;
}

const Select: FC<SelectInputProps> = ({ labelName, options }) => {
  return (
    <div className="relative">
      <label
        htmlFor="location"
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
      >
        {labelName}
      </label>
      <select
        id="location"
        name="location"
        className="block w-full rounded-md border-0 p-1.5 pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 min-w-min"
      >
        {options.map((item, idx) => (
          <option key={idx}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
