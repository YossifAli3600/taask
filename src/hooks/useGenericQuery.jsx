import { useQuery } from "react-query";
import { toast } from "react-toastify";
import useAxios from "./useAxios";
import { useCallback } from "react";
import { useStore } from "../zustand/store";
import { useParams } from "react-router";
import { queryClient } from "../queries/queries";
import Cookies from "js-cookie";


export const useGenericQuery = ({
  keys,
  apiEndpoint,
  filterName,
  filtersEndPoint,
  paginated,
  onError,
  disabled
}) => {

  const axios = useAxios();
  const authData = useStore((state) => state.authData);
  const setAuthData = useStore((state) => state.setAuthData);

  const filters = useStore((state) => state.filters[filterName] || {});

  const { page: currPage } = useParams();

  let link = apiEndpoint;


  if (filters) {
    const filterQuery = getFiltersQuery(filters);
    if (filterQuery && filterQuery != "") {
      link = (filtersEndPoint || apiEndpoint) + "?" + filterQuery;
      if (paginated) {
        link += "&page=" + (+currPage || 1);
      }
    } else if (paginated) {
      link += "?page=" + (+currPage || 1);
    }
  } else {
    if (paginated) {
      link += "?page=" + (+currPage || 1);
    }
  }


  const messageError = useCallback(
    (err) => {
      if (authData != "") toast.error(err.response.data.message);
      if (err.response.status == 401) {
        Cookies.set("auth_data", "");
        setAuthData("");
        queryClient.clear();
      }
    },
    [authData, setAuthData]
  );

  const queryKey = [...keys];
  if (filterName) queryKey.push(filters);
  if (paginated) queryKey.push(currPage ? + currPage : 1);

  return useQuery({
    queryKey: queryKey,
    queryFn: () => {
      if (disabled) return [];
      return axios
        .get(link)
        .then((data) => {
          if (paginated) return data.data;
          return data.data.data;
        })
        .catch(onError || messageError);
    },
  });
};

function getFiltersQuery(filterObj) {
  let filterQuery = [];
  for (let key in filterObj) {
    if (filterObj[key] != "") filterQuery.push(`${key}=${filterObj[key]}`);
  }
  filterQuery = filterQuery.join("&");
  return filterQuery;
}
