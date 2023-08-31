import GetJobsListAPI from "@/services/api/jobs-list-api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useJobsList = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["jobs-list"],
    queryFn: () => GetJobsListAPI(),
    staleTime: 300000, // 5 minutes in milliseconds
    cacheTime: 600000, // 10 minutes in milliseconds
  });

  return {
    isLoading,
    data,
    error,
  };
};

export default useJobsList;
