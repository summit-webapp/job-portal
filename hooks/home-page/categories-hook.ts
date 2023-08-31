import CategoriesAPI from "@/services/api/home-page/categories-api";
import GetJobsListAPI from "@/services/api/jobs-list-api";
import { useQuery } from "@tanstack/react-query";

const useCategories = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["categories-list"],
    queryFn: () => CategoriesAPI(),
    staleTime: 300000, // 5 minutes in milliseconds
    cacheTime: 600000, // 10 minutes in milliseconds
  });

  return {
    isLoading,
    data,
    error,
  };
};

export default useCategories;
