import GetJobsListAPI from "@/services/api/jobs-list-api";
import { useQuery } from "@tanstack/react-query";

const useJobsList = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["jobs-list"],
    queryFn: () => GetJobsListAPI(),
  });

  return {
    isLoading,
    data,
    error,
  };
};

export default useJobsList;
