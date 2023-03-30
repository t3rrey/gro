import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Dashboard from "@/components/layout";
import Table from "@/components/table";
import InputFoodTable from "@/components/inputFoodTable";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div>
      {!session ? (
        <Auth
          theme="light"
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google", "facebook", "twitter"]}
        />
      ) : (
        <>
          <div className="h-full bg-gray-100">
            <div className="h-full">
              <Dashboard>
                <InputFoodTable />
              </Dashboard>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
