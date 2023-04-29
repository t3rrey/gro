import { supabase } from "@/lib/supabase";
import { FoodItem } from "@/lib/types";
import { useEffect, useState } from "react";
import { SkeletonLoader } from "../shared/SkeletonLoader";
import AddFoodCard from "./AddFoodCard";

export default function FoodTable() {
  const [food, setFood] = useState<FoodItem[]>([]);
  const [editingRow, setEditingRow] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [addingNewRow, setAddingNewRow] = useState(false);

  const toggleEditing = (index: number) => {
    if (editingRow === index) {
      setEditingRow(null);
    } else {
      setEditingRow(index);
    }
  };

  const cancelEditing = () => {
    setEditingRow(null);
  };

  const handleSubmit = async (e: any, id: number) => {
    e.preventDefault();

    const updatedFood: FoodItem = {
      id: 1,
      name: e.target.name.value,
      protein: parseFloat(e.target.protein.value),
      carbs: parseFloat(e.target.carbs.value),
      fats: parseFloat(e.target.fats.value),
    };

    const { error } = await supabase
      .from("food")
      .update(updatedFood)
      .eq("id", id);

    if (error) {
      console.log("Supabase error updating food:", error);
    } else {
      const updatedFoodItems = food.map((f) => (f.id === id ? updatedFood : f));
      setFood(updatedFoodItems);
      setEditingRow(null);
    }
  };

  useEffect(() => {
    const fetchFood = async () => {
      const { data, error } = await supabase.from("food").select("*");
      if (error) console.log("Supabase error fetching food:", error);
      else {
        setFood(data);
        setLoading(false);
      }
    };

    fetchFood();
  }, []);
  return (
    <div className="p-4 sm:px-6 lg:px-8 bg-white">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Foods
          </h1>
        </div>
        <div className="hidden md:block mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setAddingNewRow(!addingNewRow)}
          >
            Add food
          </button>
        </div>
      </div>
      {addingNewRow ? <AddFoodCard /> : null}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                  >
                    Food
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Protein
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Carbs
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Fats
                  </th>
                  <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {loading ? (
                  <SkeletonLoader tableColumns={5} tableRows={5} />
                ) : (
                  food.map((f, idx) => (
                    <tr key={idx}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {editingRow === idx ? (
                          <input
                            defaultValue={f.name}
                            name="name"
                            className="w-full bg-gray-200 py-2 rounded-md pl-2"
                          />
                        ) : (
                          f.name
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {editingRow === idx ? (
                          <input
                            defaultValue={f.protein}
                            name="protein"
                            className="w-full bg-gray-200 py-2 rounded-md pl-2"
                          />
                        ) : (
                          f.protein.toString()
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {editingRow === idx ? (
                          <input
                            defaultValue={f.carbs}
                            name="carbs"
                            className="w-full bg-gray-200 py-2 rounded-md pl-2"
                          />
                        ) : (
                          f.carbs.toString()
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {editingRow === idx ? (
                          <input
                            defaultValue={f.fats}
                            name="fats"
                            className="w-full bg-gray-200 py-2 rounded-md pl-2"
                          />
                        ) : (
                          f.fats.toString()
                        )}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        {editingRow === idx ? (
                          <>
                            <button
                              onClick={cancelEditing}
                              className="text-white p-1 bg-red-600 rounded-md mx-1"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={(e) => handleSubmit(e, f.id)}
                              className="text-white p-1 bg-indigo-600 rounded-md mx-1"
                            >
                              Submit
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => toggleEditing(idx)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
