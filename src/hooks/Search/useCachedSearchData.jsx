import { useQuery } from "react-query";
import { useQueryClient } from "react-query";

export function useCachedSearchData(text) {
    const queryClient = useQueryClient();

    const { data } = useQuery(`${text}`, () => {
        return queryClient.getQueryData(`${text}`);
    });

    return data;
}
