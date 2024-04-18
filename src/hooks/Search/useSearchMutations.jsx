import { useMutation, useQueryClient } from "react-query";
import useSearchApi from "./useSearchApi";
import useFormErr from "../useFormErr";
import { toast } from "react-toastify";
import { useStore } from "../../zustand/store";

export default function useSearchMutations(text, id) {
    
    const { searchApi } = useSearchApi(text);
    const { formErr, handleMutationErr } = useFormErr();
    const editSearchData = useStore((state) => state.setSearchData);
    const editCategoryData = useStore((state) => state.setCategoryData);

    const handleSearch = useMutation(searchApi, {
        onSuccess: searchSuccessHandler,
        onError: handleMutationErr,
    });

    const handleGetCategories = useMutation(searchApi, {
        onSuccess: categorySuccessHandler,
        onError: handleMutationErr,
    });

    function searchSuccessHandler(data) {
        editSearchData(data.data.data)
        toast.success("تم البحث بنجاح");
    }
    function categorySuccessHandler(data) {
        editCategoryData(id,data.data.data)
        toast.success("تم البحث بنجاح");
    }

    return { handleSearch, handleGetCategories, formErr };
}
