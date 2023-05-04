import { useEffect, useState, FC } from "react";
import { FoodItem } from "@/lib/types";
import { supabase } from "@/lib/supabase";
import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import useDebounce from "@/lib/hooks/useDebounce";

const SearchFood: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const search = async () => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    const { data, error } = await supabase
      .from("food")
      .select("*")
      .ilike("name", `%${searchTerm}%`);

    if (error) {
      console.error("Error searching:", error);
      return;
    }

    setSearchResults(data || []);
  };

  useEffect(() => {
    search();
  }, [searchTerm]);

  return (
    <div className="border border-gray-300 flex bg-white rounded-lg flex-col">
      <div className="flex">
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={handleChange}
          className="border-none rounded-l-lg focus:outline-none border-transparent focus:border-transparent focus:ring-0 flex-grow"
        />
        <button onClick={search} className="px-2">
          <MagnifyingGlassIcon className="text-gray-500 w-6" />
        </button>
      </div>

      {searchResults.length > 0 && (
        <div>
          {searchResults.map((food) => (
            <div key={food.id} className="flex">
              <p className="my-auto ml-2">{food.name}</p>
              <button className="ml-auto mr-2 my-2">
                <PlusCircleIcon className="w-6" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFood;
