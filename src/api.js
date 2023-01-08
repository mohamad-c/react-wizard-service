import axios from "axios"

export const addUser = async (data) =>{
  await axios.post("http://localhost:3000/user", data)
}