import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContext } from "react";
import { addUser } from "../api";
import { showNotification, updateNotification } from "@mantine/notifications";

export const ReqContext = createContext();

const ReqProvider = ({ children }) =>{
  const client = useQueryClient();

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
    }
  })

  return(
    <ReqContext.Provider value={{addUserMutation}}> 
      {children}
    </ReqContext.Provider>
  )
}

export default ReqProvider;