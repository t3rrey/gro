import { FC, ButtonHTMLAttributes } from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

interface IAddNewPlanButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const AddNewPlanButton: FC<IAddNewPlanButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`w-32 h-48 shadow-lg rounded-lg bg-indigo-500 hover:scale-105 ${props.className}`}
    >
      <PlusCircleIcon className="w-12 text-white mx-auto hover:scale-150" />
    </button>
  );
};

export default AddNewPlanButton;
