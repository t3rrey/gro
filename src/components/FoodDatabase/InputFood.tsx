import React from "react";

const InputFood = () => {
  return (
    <form className="flex flex-col border border-red-500 p-4 rounded-md">
      <h2>Add new food:</h2>
      <div>
        <div className="flex flex-col">
          <label htmlFor="input-food-name" className="font-heavy">
            Name
          </label>
          <input id="input-food-name" type="text" className="rounded-md" />
        </div>
        <label htmlFor="">Protien</label>
        <input type="text" />
        <label htmlFor="">Fats</label>
        <input type="text" />
        <label htmlFor="">Carbs</label>
        <input type="text" />
        <label htmlFor="">Brand</label>
        <input type="text" />
        <label htmlFor="">Category</label>
        <input type="text" />
      </div>
    </form>
  );
};

export default InputFood;
