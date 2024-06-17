import { create } from "zustand";

const useUniversities = create((set) => {
  return {
    schools: [],
    isLoading: false,
    isError: false,
    setSchools: async () => {
      set({ isLoading: true });
      try {
        const response = await fetch("http://localhost:5000/universities");
        const data = await response.json();
        set({ schools: [...data] });
        set({ isLoading: false });
      } catch (err) {
        set({ isError: true });
        set({ isLoading: false });
      }
    },
  };
});

export { useUniversities };
