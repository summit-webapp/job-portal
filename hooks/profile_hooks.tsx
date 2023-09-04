import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_access_token } from '@/store/slices/auth_slice/login_slice';
import GetAppliedJobAPI from '@/services/api/profile_api/applied_jobs_api';
import GetProfileAPI from '@/services/api/profile_api/profile_api';
import GetSavedJobAPI from '@/services/api/profile_api/saved_jobs_api';

const useProfileQuery = () => {
  const dispatch = useDispatch();
  const token = useSelector(get_access_token);
  console.log('profile token', token.token);

  const [profileData, setProfileData] = useState({
    isLoading: true,
    data: [],
    error: false,
  });
  const [appliedJobsData, setAppliedJobsData] = useState({
    isLoading: true,
    data: [],
    error: false,
  });
  const [savedJobsData, setSavedJobsData] = useState({
    isLoading: true,
    data: [],
    error: false,
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await GetProfileAPI(token.token);
        setProfileData({
          isLoading: false, // Set isLoading to false when data is successfully fetched
          data: response,
          error: false,
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setProfileData({
          isLoading: false, // Set isLoading to false when there's an error
          data: [],
          error: true,
        });
      }
    };

    const fetchAppliedJobsData = async () => {
      try {
        const response = await GetAppliedJobAPI(token.token);
        setAppliedJobsData({
          isLoading: false, // Set isLoading to false when data is successfully fetched
          data: response,
          error: false,
        });
      } catch (error) {
        console.error('Error fetching applied jobs data:', error);
        setAppliedJobsData({
          isLoading: false, // Set isLoading to false when there's an error
          data: [],
          error: true,
        });
      }
    };

    const fetchSavedJobsData = async () => {
      try {
        const response = await GetSavedJobAPI(token.token);
        setSavedJobsData({
          isLoading: false, // Set isLoading to false when data is successfully fetched
          data: response,
          error: false,
        });
      } catch (error) {
        console.error('Error fetching saved jobs data:', error);
        setSavedJobsData({
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

  console.log('profile data', profileData);
  console.log('applied jobs data', appliedJobsData);
  console.log('saved jobs data', savedJobsData);

  return {
    profileData,
    appliedJobsData,
    savedJobsData,
  };
};

export default useProfileQuery;
