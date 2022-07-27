import axios from "axios";
import { useState } from "react";

export const useAxios = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const callAPI = async (params) => {
    setLoading(true);
    try {
      const resp = await axios.request(params);
      setLoading(false);
      setResponse(resp);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { callAPI, error, response, loading };
};
