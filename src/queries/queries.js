import { QueryClient } from "react-query";
import { useGenericQuery } from "../hooks/useGenericQuery";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 20,
		},
	},
});

export const useCategoriesData = () => {
	return useGenericQuery({
		keys: ["categories"],
		apiEndpoint: "digital-guide/categories",
	});
};

export const useLawyerData = (id) => {
	return useGenericQuery({
		keys: ["lawyer", id],
		apiEndpoint: `lawyer/${id}`,
	});
};

export const useCountriesData = () => {
	return useGenericQuery({
		keys: ["countries"],
		apiEndpoint: `digital-guide/filter/data/countries`,
	});
};

export const useCitiesData = () => {
	return useGenericQuery({
		keys: ["cities"],
		apiEndpoint: `digital-guide/filter/data/cities`,
	});
};
export const useDistrictsData = () => {
	return useGenericQuery({
		keys: ["districts"],
		apiEndpoint: `digital-guide/filter/data/districts`,
	});
};
