import GetFiltersListAPI from "@/services/api/jobs-list/filter-list-api";
import GetJobsListAPI from "@/services/api/jobs-list/jobs-list-api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useJobsList = () => {
  console.log("query client check");
  const router = useRouter();
  const queryClient = useQueryClient();

  const [jobsListQuery, setJobsListQuery] = useState({
    isLoading: true,
    data: [],
    error: false,
  });
  const [selectedFilters, setSelectedFilters] = useState<any>([]);
  // const JobsListQuery: any = useQuery({
  //   queryFn: (filters?: any) => GetJobsListAPI(filters),
  //   queryKey: ["jobs-list"],
  //   enabled: true,
  // });

  const FilterQuery = useQuery({
    queryKey: ["filters-list"],
    queryFn: () => GetFiltersListAPI(),
    staleTime: 300000, // 5 minutes in milliseconds
    cacheTime: 600000, // 10 minutes in milliseconds
  });

  const handleApplyFilters = async (event: any) => {
    let duplicateFilters: any;
    const section = event.target.name;
    const filterValue = event.target.value;
    const isChecked = event.target.checked;

    await setSelectedFilters((prevFilters: any) => {
      let updatedFilters = [...prevFilters];

      const existingSectionIndex = prevFilters.findIndex(
        (filter: any) => filter.name === section
      );

      if (existingSectionIndex !== -1) {
        if (isChecked) {
          // Check if the filterValue is not already in the values array
          if (
            !updatedFilters[existingSectionIndex].value.includes(filterValue)
          ) {
            updatedFilters[existingSectionIndex].value.push(filterValue);
          }
        } else {
          updatedFilters[existingSectionIndex].value = updatedFilters[
            existingSectionIndex
          ].value.filter((val: any) => val !== filterValue);
          if (updatedFilters[existingSectionIndex].value.length === 0) {
            updatedFilters = updatedFilters.filter(
              (filter) => filter.name !== section
            );
          }
        }
      } else if (isChecked) {
        updatedFilters.push({ name: section, value: [filterValue] });
      }

      // return updatedFilters;
      duplicateFilters = [...updatedFilters];
      return updatedFilters;
    });

    // Construct the filterString
    const filterString = encodeURIComponent(
      JSON.stringify(
        duplicateFilters.map((filter: any) => ({
          name: filter.name,
          value: Array.from(new Set(filter.value)), // Remove duplicates
        }))
      )
    );

    // Construct the new URL
    let url = router.asPath.split("?")[0]; // Get the URL without existing query params
    if (filterString !== "") {
      url += `?filter=${filterString}`;
    }
    // console.log("filters", duplicateFilters);

    // Use the new URL for navigation

    await router.push(url);
  };

  const getJobsListingDataFunction = async () => {
    setJobsListQuery({
      isLoading: true,
      data: [],
      error: false,
    });
    let url_query: any = {};
    if (Object.keys(router?.query)?.length > 0) {
      const storeURLQuery: any = JSON.parse(`${router?.query?.filter}`);
      storeURLQuery.forEach((item: any) => {
        url_query["custom_job_category"] = ["in", item.value];
      });
    }
    const jobsListingDataFromAPI: any = await GetJobsListAPI(url_query);

    if (jobsListingDataFromAPI?.status === 200) {
      if (jobsListingDataFromAPI?.data?.message?.data?.length > 0) {
        setJobsListQuery({
          isLoading: false,
          data: jobsListingDataFromAPI?.data?.message?.data,
          error: false,
        });
      } else {
        setJobsListQuery({
          isLoading: false,
          data: [],
          error: false,
        });
      }
    } else {
      setJobsListQuery({
        isLoading: false,
        data: [],
        error: true,
      });
    }
  };

  useEffect(() => {
    getJobsListingDataFunction();
  }, [router.query]);

  return {
    jobsListQuery,
    FilterQuery,
    selectedFilters,
    handleApplyFilters,
  };
};

export default useJobsList;
