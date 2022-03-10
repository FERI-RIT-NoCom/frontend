import axios from "axios";
import {API_URL} from "./constants";

export const loginUser = async (username, password) => {
  return new Promise(((resolve, reject) => {
    axios.post(`${API_URL}/login`, {username, password}).then((res) => {
      if (res.status === 200) {
        // Save to local storage
        localStorage.setItem("userData", JSON.stringify(res.data))

        resolve(res.data)
      }
    }).catch((err) => {
      reject(err.response.data)
    })
  }))
}

export const registerUser = (username, email, password) => {
  // TODO: Register handler
}