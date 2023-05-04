import { supabase } from "@/lib/supabase";
import { useEffect } from "react";

const index = () => {
  useEffect(() => {
    // const testData = async () => {
    //   let { data: meal_plan, error } = await supabase
    //     .from("meal_plan")
    //     .select(`id, name, meal(id, name)`);
    //   if (error) {
    //     console.log(error);
    //   }
    //   console.log("Meal plan api response:", meal_plan);
    // };
    // testData();
  }, []);
  return <div></div>;
};

export default index;
