import axios from "axios";

export const addUser = async (data) => {
  await axios.post("http://localhost:3000/user", data);
};

export const getServices = async () => {
  let services = await axios.get("http://localhost:3000/services");
  return services.data;
};

export const getUser = async () => {
  const user = await axios.get("http://localhost:3000/user");
  return user.data;
};

export const getCartServices = async () => {
  let cartServices = await axios.get("http://localhost:3000/selectedServices");
  return cartServices.data;
};

export const addServiceToCart = async (data) => {
  await axios.post("http://localhost:3000/selectedServices", data);
};

export const deleteServiceFromCart = async () => {
  await axios.delete(`http://localhost:3000/selectedServices/1`);
};
