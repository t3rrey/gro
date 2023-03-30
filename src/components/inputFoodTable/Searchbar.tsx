import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";

const Searchbar = () => {
  return (
    <div>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
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
  );
};

export default Searchbar;
