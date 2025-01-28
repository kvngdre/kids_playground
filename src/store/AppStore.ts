import { create } from 'zustand';

// type throwAway = 'yes' | 'no';

// interface IAppStore {
//   throwaway: throwAway,
//   reset: () => void;
// }

// const storeDefaults = {
//   throwaway: 'yes' as 'yes',
// }

// const appStore = create(
//   (set: any): IAppStore => ({
//     ...storeDefaults,
//     // Reset function to reset store values to default
//     reset: () =>
//       set({
//         ...storeDefaults,
//       }),
//   }),
// );

interface AppState {
  activeSideNav: string;
  setActiveSideNav: (nav: string) => void;
  sidebarCollapsed: boolean;
  profileState: 'parent' | 'user';
  passcodeValue: (string | number)[];
  setPasscodeValue: (newValue: (string | number)[]) => void;
}

const useAppStore = create<AppState>((set) => ({
  activeSideNav: 'gallery',
  setActiveSideNav: (nav: string) => set({ activeSideNav: nav }),
  sidebarCollapsed: false,
  profileState: 'parent',
  passcodeValue: ['', '', '', ''],
  setPasscodeValue: (newValue) => set({ passcodeValue: newValue }),
}));

export default useAppStore;
