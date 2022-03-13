import axios from "axios";
import {API_URL} from "./constants";
import React from "react";

export const getComments = async (url) => {
    return new Promise(((resolve, reject) => {
        axios.get(`${API_URL}/comments_on_website`, {params: { url: url}}).then((res) => {
            if (res.status === 200) {
                return res.data;
            }
        }).catch((err) => {
            reject(err.response.data)
        })
    }))
}

export const addComment = (url, comment, is_nsfw) => {
    return new Promise((resolve, reject) => {
        let id_client = JSON.parse(localStorage.getItem("userData")).id;
        axios.post(`${API_URL}/new_comment`, {url, id_client, comment, is_nsfw}).then((res) => {
            if (res.status === 200) {
                resolve(res.data);
            }

            reject("Error processing add comment request");
        }).catch((err) => {
            reject(err.response.data);
        })
    })
}

export const likeComment = (id) => {
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}/like`, {id}).then((res) => {
            if (res.status === 200) {
                resolve(res.data);
            }

            reject("Error processing liking comment request");
        }).catch((err) => {
            reject(err.response.data);
        })
    })
}