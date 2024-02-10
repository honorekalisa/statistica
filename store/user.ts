import { User } from "@supabase/supabase-js";
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user) => set(() => ({ user })),
    }),
    { name: "user" }
  )
);

export default useUserStore;
