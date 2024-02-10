import { createBrowserClient } from "@supabase/ssr";

export async function loggedInUser() {
  const clientSupabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const {
    data: { session },
  } = await clientSupabase.auth.getSession();

  if (!session) {
    // User is not logged in, redirect to the login page
    return;
  }

  const {
    data: { user },
  } = await clientSupabase.auth.getUser();
  return user;
}
