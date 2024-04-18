import useAxios from "../useAxios";

export default function useSearchApi() {
    const axios = useAxios();
    function searchApi(data) {
        return axios.post(`digital-guide/search`, {
            ...data,
        });
    }
    return { searchApi }
}
