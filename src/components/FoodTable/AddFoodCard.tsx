import { FC, useState } from "react";
import Input from "../shared/Input";
import { supabase } from "@/lib/supabase";
import ListBoxInput from "../shared/ListBoxInput";
import { foodCategories } from "@/lib/consts";

export type FoodItem = {
  id: number;
  name: string;
  brand?: string;
  category?: string;
  protein: number;
  carbs: number;
  fats: number;
};

interface AddFoodCardProps {
  onSubmit?: (e: React.FormEvent) => void;
  onCancel?: () => void;
}

const AddFoodCard: FC<AddFoodCardProps> = ({ onSubmit, onCancel }) => {
  const [foodData, setFoodData] = useState<Partial<FoodItem>>({
    name: "",
    brand: "",
    category: "",
    protein: 0,
    carbs: 0,
    fats: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("food")
      .insert([{ ...foodData }]);

    if (data) {
      console.log("Food added successfully", data);
    } else {
      console.error("Error adding food", error);
    }

    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <div className="bg-white rounded-md p-6 shadow-lg w-full mx-auto my-4">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-x-8">
          <Input
            labelName="Food Name"
            name="name"
            value={foodData.name}
            onChange={handleChange}
          />
          <Input
            labelName="Category"
            name="category"
            value={foodData.category}
            onChange={handleChange}
          />
          <ListBoxInput values={foodCategories} />

          <Input
            labelName="Brand"
            name="brand"
            value={foodData.brand}
            onChange={handleChange}
          />
          <Input
            labelName="Protein"
            name="protein"
            value={foodData.protein}
            onChange={handleChange}
          />
          <Input
            labelName="Carbs"
            name="carbs"
            value={foodData.carbs}
            onChange={handleChange}
          />
          <Input
            labelName="Fats"
            name="fats"
            value={foodData.fats}
            onChange={handleChange}
          />
        </div>
        <div className="flex mt-4 space-x-1">
          <button
            type="button"
            onClick={onCancel}
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFoodCard;
