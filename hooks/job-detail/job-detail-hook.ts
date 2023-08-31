import GETJobDetailAPI from "@/services/api/job-detail/job-detail-api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

const useJobDetail = () => {
  const { query } = useRouter();
  const [detailData, setDetailData] = useState<any>({});

  const { isLoading, data, error } = useQuery({
    queryKey: ["job-detail", query.jobID],
    queryFn: () => GETJobDetailAPI(query.jobID),
  });
  // console.log("query", query);
  // if (data) {
  //   setDetailData({ ...data?.message?.data });
  // } else {
  //   setDetailData({});
  // }
  return { isLoading, data, error, detailData };
};

export default useJobDetail;
