import { create } from "zustand";

type CounterState = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  set: (n: number) => void;
};

export const useCounter = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((s) => ({ count: s.count + 1 })),
  decrease: () => set((s) => ({ count: s.count - 1 })),
  reset: () => set({ count: 0 }),
  set: (n: number) => set({ count: n }),
}));
