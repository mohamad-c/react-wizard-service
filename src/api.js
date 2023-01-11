import axios from "axios";

export const addUser = async (data) => {
  await axios.post("http://localhost:3000/user", data);
};

export const getUser = async () => {
  const user = await axios.get("http://localhost:3000/user");
  return user.data;
};
