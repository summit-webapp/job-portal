import GetAppliedJobAPI from "@/services/api/profile_api/applied_jobs_api";
import GetProfileAPI from "@/services/api/profile_api/profile_api";
import GetSavedJobAPI from "@/services/api/profile_api/saved_jobs_api";
import { get_access_token } from "@/store/slices/auth_slice/login_slice";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const useProfileQuery = () => {
  const token = useSelector(get_access_token);
  // console.log('profile token', token.token);

  // Define separate queries for profile and applied jobs
  const profileQuery = useQuery({
    queryKey: ["profile"],
    queryFn: () => GetProfileAPI(token.token),
    staleTime: 300000, // 5 minutes in milliseconds
    cacheTime: 600000, // 10 minutes in milliseconds
  });

  const appliedJobsQuery = useQuery({
    queryKey: ["applied-jobs"],
    queryFn: () => GetAppliedJobAPI(token.token),
    staleTime: 300000, // 5 minutes in milliseconds
    cacheTime: 600000, // 10 minutes in milliseconds
  });
  const savedJobsQuery = useQuery({
    queryKey: ["saved-jobs"],
    queryFn: () => GetSavedJobAPI(token.token),
    staleTime: 300000, // 5 minutes in milliseconds
    cacheTime: 600000, // 10 minutes in milliseconds
  });
  // console.log('saved jobs hook',savedJobsQuery.data)
  return {
    profileQuery,
    appliedJobsQuery,
    savedJobsQuery,
  };
};

export default useProfileQuery;
