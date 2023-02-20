import { ArrowPathIcon } from "@heroicons/react/24/outline";

type Food = {
  food: string;
  amount: number;
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
};

const foods: Food[] = [
  {
    food: "Chicken Breast",
    amount: 100,
    protein: 31,
    carbs: 0,
    fats: 3.6,
    calories: 165,
  },
  {
    food: "Brown Rice",
    amount: 50,
    protein: 2.2,
    carbs: 34,
    fats: 0.9,
    calories: 160,
  },
  {
    food: "Broccoli",
    amount: 100,
    protein: 2.8,
    carbs: 6,
    fats: 0.4,
    calories: 34,
  },
  {
    food: "Salmon",
    amount: 100,
    protein: 20,
    carbs: 0,
    fats: 13,
    calories: 208,
  },
  {
    food: "Sweet Potato",
    amount: 100,
    protein: 1.6,
    carbs: 20,
    fats: 0.1,
    calories: 86,
  },
  {
    food: "Spinach",
    amount: 100,
    protein: 2.9,
    carbs: 1.4,
    fats: 0.4,
    calories: 23,
  },
  { food: "Egg", amount: 50, protein: 6, carbs: 0.6, fats: 5, calories: 72 },
  {
    food: "Almonds",
    amount: 50,
    protein: 6,
    carbs: 6,
    fats: 16,
    calories: 200,
  },
  {
    food: "Avocado",
    amount: 100,
    protein: 2,
    carbs: 9,
    fats: 15,
    calories: 160,
  },
  {
    food: "Greek Yogurt",
    amount: 100,
    protein: 10,
    carbs: 3,
    fats: 0.4,
    calories: 59,
  },
];

// write a function that gets an attribute from an objects and adds the total of that attribute
// then return the total

const getTotal = (attribute: string) => {};

const Table = () => {
  return (
    <div className="px-6 lg:px-8 py-12">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Meal 1</h1>
          {/* <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p> */}
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <div className="flex">
              <p className="pr-2">New meal</p>
              <ArrowPathIcon className="flex-shrink-0 h-6 w-6" />
            </div>
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Food
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Calories
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Protien
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Carbs
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Fats
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Calories
                    </th>
                    {/* <th scope="col" className="relative py-3.5 pl-3 pr-6">
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {foods.map((item, idx) => (
                    <tr key={idx}>
                      <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900">
                        {item.food}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-500">
                        {item.amount}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.protein}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.carbs}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.fats}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.calories}
                      </td>
                      {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {item.name}</span>
                        </a>
                      </td> */}
                    </tr>
                  ))}
                  <tr className="bg-gray-50/50">
                    <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900">
                      Totals:
                    </td>
                    <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900"></td>
                    <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900"></td>
                    <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900"></td>
                    <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900"></td>
                    <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
