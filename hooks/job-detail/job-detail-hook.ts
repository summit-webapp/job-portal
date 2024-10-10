import GETJobDetailAPI from "@/services/api/job-detail/job-detail-api";
import CreateJobApplicantAPI from "@/services/api/jobs-list/create-job-applicant";
import { get_access_token } from "@/store/slices/auth_slice/login_slice";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useProfileQuery from "../profile_hooks";

const useJobDetail = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [detailData, setDetailData] = useState<any>({});
  const tokenFromStore = useSelector(get_access_token);

  const { isLoading, data, error } = useQuery({
    queryKey: ["job-detail", query.jobID],
    queryFn: () => GETJobDetailAPI(query.jobID),
  });

  const {
    appliedJobsQuery,
    savedJobsQuery,
    fetchAppliedJobsData,
    fetchSavedJobsData,
  } = useProfileQuery();

  const createJobApplicantFunction = async (
    designation: string,
    name: string,
    status: string
  ) => {
    console.log("token", tokenFromStore.token);
    if (
      tokenFromStore.token !== "" &&
      tokenFromStore.token !== null &&
      tokenFromStore.token !== undefined
    ) {
      const callAPIForCreatingJobApplicant = await CreateJobApplicantAPI(
        tokenFromStore.token,
        designation,
        name,
        status
      );
      // console.log(
      //   "applicant creation api successfull in hook",
      //   callAPIForCreatingJobApplicant
      // );

      if (callAPIForCreatingJobApplicant?.status === 200) {
        if (callAPIForCreatingJobApplicant?.data?.message?.msg === "success") {
          toast.success(`Your Application has been Received!`, {
            autoClose: 3000,
            className: "custom-toast", // Close the notification after 3 seconds
          });
        } else {
          toast.error(`Sorry, Can't Accept your Application now!`, {
            autoClose: 5000,
            className: "custom-toast", // Close the notification after 5 seconds
          });
        }
      } else {
        toast.error(`Something went wrong. Please check back in sometime.`, {
          autoClose: 5000,
          className: "custom-toast", // Close the notification after 5 seconds
        });
      }

      await fetchAppliedJobsData();
      await fetchSavedJobsData();
    } else {
      router.push("/login");
    }
  };

  return {
    isLoading,
    data,
    error,
    detailData,
    appliedJobsQuery,
    savedJobsQuery,
    createJobApplicantFunction,
  };
};

export default useJobDetail;
