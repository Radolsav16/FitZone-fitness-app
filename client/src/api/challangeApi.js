import { useState, useEffect } from "react";
import { fetchApi } from "../utils/requester";
import { useFormState } from "../hooks/FormStateHook";
import { useLoadingContext } from "../providers/LoadingProvider";

const baseUrl = "http://localhost:3030";

export const useChallanges = () => {
  const [challanges, setChallanges] = useState([]);
  const [filteredChallanges, setFilteredChallanges] = useState([]);
  const { showLoading, hideLoading } = useLoadingContext();

  useEffect(() => {
    (async () => {
      showLoading();
      const result = await fetchApi.get(baseUrl + "/challanges", {
        "Content-Type": "application/json",
      });
      hideLoading();
      setChallanges(result);
      setFilteredChallanges(result);
    })();
  }, []);

  return {
    challanges,
    filteredChallanges,
    setFilteredChallanges,
    setChallanges
  };
};

export const useChallange = (id) => {
  const [challange, setChallange] = useState({});
  const [isJoin, setIsJoin] = useState(false);
  const [isParticipants, setIsParticipants] = useState(false);
  const { showLoading, hideLoading } = useLoadingContext();

  useEffect(() => {
    (async () => {
      showLoading();
      const result = await fetchApi.get(baseUrl + `/challanges/${id}`, {
        "Content-Type": "application/json",
      });
      hideLoading();
      setChallange(result);
    })();
  }, [id]);

  return {
    challange,
    isJoin,
    setIsJoin,
    isParticipants,
    setIsParticipants,
  };
};

export const useCreateChallange = () => {
  const { handleDataOnChange, dataState, SetErrors, errors } = useFormState({
    name: "",
    type: "",
    difficulty: "",
    duration: "",
    equipment: "",
    image: "",
    description: "",
  });

  const createChallange = (data, ownerId) => {
    data.ownerId = ownerId;
    fetchApi.post(baseUrl + "/create-challange", data, {
      "Content-Type": "application/json",
    });
  };

  return {
    handleDataOnChange,
    errors,
    createChallange,
    SetErrors,
    dataState,
  };
};

export const useEditChallange = (id) => {
  const { dataState, SetDataState, errors, SetErrors, handleDataOnChange } =
    useFormState({
      name: "",
      type: "",
      difficulty: "",
      duration: "",
      equipment: "",
      image: "",
      description: "",
    });

  useEffect(() => {
    (async () => {
      const res = await fetchApi.get(baseUrl + `/challanges/${id}`, {
        "Content-Type": "application/json",
      });
      SetDataState(res);
    })();
  }, [id]);

  const editChallange = (data) => {
    fetchApi.put(baseUrl + `/challanges/${id}`, data, {
      "Content-Type": "application/json",
    });
  };

  return {
    editChallange,
    handleDataOnChange,
    dataState,
    errors,
    SetErrors,
  };
};

export const useDeleteChallange = () => {
  const [showModal, setShowModal] = useState(false);

  const cancel = () => {
    setShowModal(!showModal);
  };

  const deleteChallange = (id) => {
    fetchApi.del(baseUrl + `/challanges/${id}`);
    setShowModal(!showModal);
  };

  return { deleteChallange, cancel, showModal, setShowModal };
};

export const useJoinChallange = () => {
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [isJoin, setIsJoin] = useState(false);

  const toggleJoin = () => {
    setShowJoinForm(!showJoinForm);
  };

  const joinChallange = async (userId, challangeId, message) => {
    return fetchApi.post(
      baseUrl + `/join-challange/${userId}/${challangeId}`,
      { message },
      { "Content-Type": "application/json" }
    );
  };

  return {
    joinChallange,
    setShowJoinForm,
    showJoinForm,
    toggleJoin,
    isJoin,
    setIsJoin,
  };
};

export const useSaveChallange = (userId, challangeId) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(
        baseUrl + `/saved-challanges/${userId}`,
        { "Content-Type": "application/json" }
      );
      if (result.includes(challangeId)) {
        return setSaved(true);
      }
    })();
  }, [userId]);

  const saveChallange = async () => {
    await fetchApi.post(baseUrl + `/challange-save/${userId}/${challangeId}`);
    setSaved(true);
  };

  return {
    saveChallange,
    saved,
  };
};

export const useUserSavedChallanges = (userId) => {
  const [userSavedChallanges, setUserSavedChallanges] = useState(0);

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(
        baseUrl + `/saved-challanges/${userId}`,
        { "Content-Type": "application/json" }
      );
      setUserSavedChallanges(result.length);
    })();
  }, [userId]);

  return {
    userSavedChallanges,
    setUserSavedChallanges,
  };
};

export const useUserJoinedChallanges = (userId) => {
  const [userJoinedchallanges, setUserJoinedChallanges] = useState(0);

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(
        baseUrl + `/joined-challanges/${userId}`,
        { "Content-Type": "application/json" }
      );
      setUserJoinedChallanges(result.length);
    })();
  }, [userId]);

  return {
    userJoinedchallanges,
    setUserJoinedChallanges,
  };
};
