import Cookies from "js-cookie";
import create from "zustand";
const lang = localStorage.getItem("lang") || "rtl";
document.documentElement.dir = lang;

const store = (set) => ({
	lang: lang,
	SearchData: null,
	CategoryData: null,
	filters: {},
	editFilters: (filterName, value) => {
		set((store) => ({
			filters: { ...store.filters, [filterName]: value },
		}));
	},
	editLang: (value) => {
		set(() => ({
			lang: value,
		}));
		localStorage.setItem("lang", value);
		document.documentElement.dir = value;
	},
	setSearchData: (data) => {
		set(() => ({ SearchData: data }));
	},
	setCategoryData: (data) => {
		set(() => ({ SearchData: data }));
	},
});

export const useStore = create(store);
