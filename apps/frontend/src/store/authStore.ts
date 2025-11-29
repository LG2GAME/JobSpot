import type { SafeUser } from "@ltypes";
import { create } from "zustand";

interface AuthStore {
  user: SafeUser | null;
  login: (user: SafeUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
