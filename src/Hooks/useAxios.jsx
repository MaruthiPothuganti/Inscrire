import axios from "axios";
import { useState } from "react";

export const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const callAPI = async (params) => {
    try {
      const resp = await axios.request(params);
      setResponse(resp);
    } catch (err) {
      setError(err);
    }
  };

  return { callAPI, error, setError, response };
};
