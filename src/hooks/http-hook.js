import { useState, useCallback } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async (path, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + path, {
          method,
          body,
          headers,
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    [],
  );

  return { isLoading, error, sendRequest };
};
