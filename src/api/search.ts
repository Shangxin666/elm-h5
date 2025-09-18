import axios from "./base";
import type { ISearchRusultList } from "@/types";

export function fetchSearchData(key = '') {
  return axios.get<ISearchRusultList,ISearchRusultList>('home_search', {
    params: {_label_like: key},
  })
}
