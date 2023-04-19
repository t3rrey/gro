import { useState, ChangeEvent, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import Input from "./Input";
import { FoodItem } from "@/lib/types";
import { foodCategories } from "@/lib/consts";
import Select from "./Select";
import { supabase } from "@/lib/supabase";

const InputFoodCard = () => {
  const [inputValues, setInputValues] = useState<FoodItem>({
    name: "",
    brand: "",
    protein: 0,
    carbs: 0,
    fats: 0,
    category: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof FoodItem
  ) => {
    let value = e.target.value;
    setInputValues({ ...inputValues, [field]: value });
  };

  const handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement>,
    field: keyof FoodItem
  ) => {
    let value = e.target.value;
    setInputValues({ ...inputValues, [field]: value });
  };

  const addFoodItem = async () => {
    try {
      // if (!inputValues.name || !inputValues.category) {
      //   alert("Please fill in the required fields.");
      //   return;
      // }

      const { error } = await supabase.from("food").insert([inputValues]);
      if (error) {
        console.error("Error adding food item:", error);
      } else {
        alert("Food item added successfully.");
      }
    } catch (error) {
      console.error("Error adding food item:", error);
    }
  };

  const LogFood = async () => {
    console.log("food");
    let { data: food, error } = await supabase.from("food").select("*");
    if (error) {
      console.log(error);
    }
    console.log(food);
  };

  useEffect(() => {
    console.log({ inputValues });
  }, [inputValues]);

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
              options={foodCategories}
              labelName="Category"
              onChange={(e) => handleSelectChange(e, "category")}
              value={inputValues.category}
            />
            <Input
              placeholder="Generic"
              labelName="Brand"
              onChange={(e) => handleInputChange(e, "brand")}
              value={inputValues.brand}
            />
          </div>
          <div className="flex space-x-6 my-2">
            <Input
              placeholder="0"
              type={"number"}
              labelName="Protein"
              onChange={(e) => handleInputChange(e, "protein")}
              value={inputValues.protein.toString()}
            />
            <Input
              placeholder="0"
              type={"number"}
              labelName="Carbs"
              onChange={(e) => handleInputChange(e, "carbs")}
              value={inputValues.carbs.toString()}
            />
            <Input
              placeholder="0"
              type={"number"}
              labelName="Fats"
              onChange={(e) => handleInputChange(e, "fats")}
              value={inputValues.fats.toString()}
            />
          </div>
        </div>
        <div
          className="bg-[#FA95A0] w-12 h-12 my-auto cursor-pointer rounded-full ml-auto hover:scale-105"
          onClick={LogFood}
        >
          <PlusIcon className="text-white" />
        </div>
      </div>
    </form>
  );
};

export default InputFoodCard;
