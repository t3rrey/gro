import { Food, foods } from "../table";
import {
  MagnifyingGlassCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Searchbar from "./Searchbar";
import React from "react";

// write a function that takes the food and filters it based on the search term
// then return the filtered food

const InputFoodTable = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredFood = foods.filter((food) => {
    return food.food.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        {/* <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div> */}
        {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add food
          </button>
        </div> */}
        <div className="sm:flex-auto">
          {/* <h1 className="text-base font-semibold leading-6 text-gray-900">
            Search
          </h1> */}
          {/* <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p> */}
          {/* <Searchbar /> */}

          <div>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                onChange={handleChange}
                type="text"
                name="account-number"
                id="account-number"
                className="block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Search by food name"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <MagnifyingGlassCircleIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-1 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 py-1.5 px-3 my-2 md:m-0 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <div className="flex">
              <p>New meal</p>
              <PlusIcon className="w-6 h-6" />
            </div>
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Food
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Protien
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Fats
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Carbs
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Calories
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filteredFood.map((food: Food) => (
              <tr key={food.food}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                  {food.food}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Title</dt>
                    <dd className="mt-1 truncate text-gray-700">
                      P: {food.protein} F: {food.fats} C: {food.carbs}
                    </dd>
                    <dt className="sr-only sm:hidden">Email</dt>
                    {/* <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      {food.fats}
                    </dd>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      {food.fats} f
                    </dd> */}
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {food.protein}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {food.fats}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500">
                  {food.carbs}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {food.calories}
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {food.carbs}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputFoodTable;
