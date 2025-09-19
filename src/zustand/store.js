import { create } from "zustand";
import axios from "axios";

const useDataStore = create((set) => ({
  products: [],
  loading: false,
  error: null,
categories:[],
  getProducts: async () => {
    set({ loading: true, error: null }); 
    try {
      const res = await axios.get("/data.json"); 
      set({ products: res.data.products, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  getCategories: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get("/data.json"); 
      set({ categories: res.data.categories, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useDataStore;
