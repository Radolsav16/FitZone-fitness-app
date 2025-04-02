import { useEffect, useState } from "react";
import { fetchApi } from "../utils/requester";

const baseUrl = "http://localhost:3030";

export const useUser = (id) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(baseUrl + `/user/${id}`);
      setUser(result);
    })();
  }, [id]);

  return {
    user,
  };
};

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(baseUrl + `/users`);
      setUsers(result);
    })();
  }, []);

  return {
    users,
    setUsers,
  };
};

export const useDeleteUser = () => {
  const deleteUser = async (id) => {
    await fetchApi.del(baseUrl + `/user/${id}`);
  };

  return {
    deleteUser,
  };
};
