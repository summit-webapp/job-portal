import React, { useEffect, useState } from "react";
import CategoriesAPI from "@/services/api/home-page/categories-api";

const useCategories = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await CategoriesAPI();
        setData(response); // Set the fetched data in the state
      } catch (err:any) {
        setError(err); // Store the error if any
      } finally {
        setIsLoading(false); // Stop loading once data is fetched or an error occurs
      }
    };

    fetchCategories(); // Call the API inside useEffect
  }, []); // Empty dependency array to ensure this effect runs once on mount

  return {
    isLoading,
    data,
    error,
  };
};

export default useCategories;
