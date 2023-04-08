import { useState, ChangeEvent } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import Input from "./Input";
import { FoodItem } from "@/types";
import Select from "./Select";

const InputFood = () => {
  const [inputValues, setInputValues] = useState<FoodItem>({
    name: "",
    brand: "",
    protein: "",
    carbs: "",
    fats: "",
    category: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof FoodItem
  ) => {
    setInputValues({ ...inputValues, [field]: e.target.value });
  };

  return (
    <form className="border shadow-lg p-4 rounded-md bg-white">
      <div className="flex">
        <div className="my-auto">
          <div className="flex space-x-6">
            <Input
              labelName="Name"
              onChange={(e) => handleInputChange(e, "name")}
              value={inputValues.name}
            />
            <Select
              options={["Protien", "Fruit", "Wheat", "This is a test option"]}
              labelName="Category"
            />
            <Input
              labelName="Brand"
              onChange={(e) => handleInputChange(e, "brand")}
              value={inputValues.brand}
            />
          </div>
          <div className="flex space-x-6 my-2">
            <Input
              labelName="Protein"
              onChange={(e) => handleInputChange(e, "protein")}
              value={inputValues.protein}
            />
            <Input
              labelName="Carbs"
              onChange={(e) => handleInputChange(e, "carbs")}
              value={inputValues.carbs}
            />
            <Input
              labelName="Fats"
              onChange={(e) => handleInputChange(e, "fats")}
              value={inputValues.fats}
            />
          </div>
        </div>
        <div className="bg-[#FA95A0] w-12 h-12 my-auto cursor-pointer rounded-full ml-auto hover:scale-105">
          <PlusIcon className="text-white" />
        </div>
      </div>
    </form>
  );
};

export default InputFood;
