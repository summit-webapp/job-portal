import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_access_token } from '@/store/slices/auth_slice/login_slice';
import GetAppliedJobAPI from '@/services/api/profile_api/applied_jobs_api';
import GetProfileAPI from '@/services/api/profile_api/profile_api';
import GetSavedJobAPI from '@/services/api/profile_api/saved_jobs_api';

const useProfileQuery = () => {
  const dispatch = useDispatch();
  const token = useSelector(get_access_token);
  // console.log('profile token', token.token);

  const [profileQuery, setProfileQuery] = useState({
    isLoading: true,
    data: [],
    error: false,
  });
  const [appliedJobsQuery, setAppliedJobsQuery] = useState({
    isLoading: true,
    data: [],
    error: false,
  });
  const [savedJobsQuery, setSavedJobsQuery] = useState({
    isLoading: true,
    data: [],
    error: false,
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await GetProfileAPI(token.token);
        setProfileQuery({
          isLoading: false, // Set isLoading to false when data is successfully fetched
          data: response,
          error: false,
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setProfileQuery({
          isLoading: false, // Set isLoading to false when there's an error
          data: [],
          error: true,
        });
      }
    };

    const fetchAppliedJobsData = async () => {
      try {
        const response = await GetAppliedJobAPI(token.token);
        setAppliedJobsQuery({
          isLoading: false, // Set isLoading to false when data is successfully fetched
          data: response,
          error: false,
        });
      } catch (error) {
        console.error('Error fetching applied jobs data:', error);
        setAppliedJobsQuery({
          isLoading: false, // Set isLoading to false when there's an error
          data: [],
          error: true,
        });
      }
    };

    const fetchSavedJobsData = async () => {
      try {
        const response = await GetSavedJobAPI(token.token);
        setSavedJobsQuery({
          isLoading: false, // Set isLoading to false when data is successfully fetched
          data: response,
          error: false,
        });
      } catch (error) {
        console.error('Error fetching saved jobs data:', error);
        setSavedJobsQuery({
          isLoading: false, // Set isLoading to false when there's an error
          data: [],
          error: true,
        });
      }
    };

    fetchProfileData();
    fetchAppliedJobsData();
    fetchSavedJobsData();
  }, [token]);

  console.log('profile data', setProfileQuery);
  console.log('applied jobs data', setAppliedJobsQuery);
  console.log('saved jobs data', setSavedJobsQuery);

  return {
    profileQuery,
    appliedJobsQuery,
    savedJobsQuery,
  };
};

export default useProfileQuery;
