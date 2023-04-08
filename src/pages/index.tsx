import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Dashboard from "@/components/layout";

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
          <Dashboard></Dashboard>
        </>
      )}
    </div>
  );
};

export default Home;
