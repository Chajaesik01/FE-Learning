import { create } from 'zustand'

type CountType = {
    count: number;
    increase: () => void;
    decrease: () => void;
}
export const useCountStore = create<CountType>((set, get) => ({
    count: 1,
    increase: () =>  {
        const { count } = get();
        set({ count: count + 1})
    },
    decrease: () => {
        const { count } = get()
        set({  count: count - 1})
    }
}))