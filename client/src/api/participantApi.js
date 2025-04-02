import { useEffect, useState } from "react";
import { fetchApi } from "../utils/requester";

const baseUrl = "http://localhost:3030";

export const useParticipates = (id) => {
  const [participates, setParticipants] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(
        baseUrl + `/challange-participants/${id}`,
        { "Content-Type": "application/json" }
      );
      setParticipants(result);
    })();
  }, []);

  return {
    participates,
    setParticipants,
  };
};

export const useLatestParticipants = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(
        baseUrl + "/latest-participants-challanges",
        { "Content-Type": "application/json" }
      );
      setParticipants(result);
    })();
  }, []);

  return {
    participants,
  };
};

export const useUserParticipants = (userId) => {
  const [count, setCount] = useState(Number);

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(
        baseUrl + `/user-participant-count/${userId}`,
        { "Content-Type": "application/json" }
      );
      setCount(result);
    })();
  }, []);

  return {
    count,
    setCount,
  };
};
