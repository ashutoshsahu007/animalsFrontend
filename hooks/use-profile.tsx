import { create, StateCreator } from "zustand";
import { persist,PersistOptions  } from 'zustand/middleware';

interface ProfileStore {
  user: any;
  setUser: (user: any) => void;
  logOut : () => void;
  isRehydrated: boolean;
  setRehydrated: (rehydrated: boolean) => void;
}
type MyPersist = (
  config: StateCreator<ProfileStore>,
  options: PersistOptions<ProfileStore>
) => StateCreator<ProfileStore>;

export const useProfile = create<ProfileStore>(
  (persist as unknown as MyPersist)(
    (set) => ({
      user: null,
      setUser: (user: any) => set({ user }),
      logOut: () => set({ user: null }),
      isRehydrated: true,
      setRehydrated: (rehydrated) => set({ isRehydrated: rehydrated }),
    }),
    {
      name: "user", 
      getStorage: () => sessionStorage, 
    }
  )
);
