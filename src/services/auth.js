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

      reject("Error processing login request")
    }).catch((err) => {
      reject(err.response.data)
    })
  }))
}

export const registerUser = (username, email, password) => {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/register`, {username, email, password}).then((res) => {
      if (res.status === 200) {
        resolve(res.data)
      }

      reject("Error processing register request")
    }).catch((err) => {
      reject(err.response.data)
    })
  })
}