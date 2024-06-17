import { createStore } from "zustand";

const useSign = createStore((set) => {
  return {
    isLoading: false,
    signReponse: {},
    isError: false,
    submitData: async (email, password) => {},
  };
});

export { useSign };
