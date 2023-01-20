import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { addUser, getServices } from "../api";
import { showNotification, updateNotification } from "@mantine/notifications";

export const ReqContext = createContext();

const ReqProvider = ({ children }) => {
  const client = useQueryClient();

  const { data: servicesData } = useQuery(["services"], () => getServices());

  const addUserMutation = useMutation(addUser, {
    onMutate: () => {
      showNotification({
        id: "load-data",
        loading: true,
        title: "Loading your data",
        message: "Please wait ⏳",
        autoClose: false,
        disallowClose: true,
      });
    },
    onSuccess: () => {
      client.invalidateQueries("users");
      updateNotification({
        id: "load-data",
        color: "teal",
        title: "Success",
        message: "Profile created successfuly ✅",
        autoClose: 2000,
      });
    },
    onError: (error) => {
      updateNotification({
        id: "load-data",
        color: "red",
        title: "An error occured ❌",
        message: error.message,
        autoClose: 2000,
      });
    },
  });
  // add a service to cart
  const [checked, setChecked] = useState([]);

  const checkService = (serviceBool, id) =>{
    let temp = [...checked]
    let obj = servicesData.find((val)=> val.id === id)
    console.log(obj.price)
    // add to cart array
    if(serviceBool === true){
      console.log("Service is selected", id)
      temp = [...checked, obj.price]
    // delete from cart array
    }else{
      temp.splice(checked.indexOf(obj.price), 1)
      console.log(temp);
      console.log("service is not selected");
    }
    setChecked(temp)
  }

  return (
    <ReqContext.Provider value={{ addUserMutation, servicesData, checkService, checked }}>
      {children}
    </ReqContext.Provider>
  );
};

export default ReqProvider;
