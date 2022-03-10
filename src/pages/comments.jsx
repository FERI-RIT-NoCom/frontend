import '../styles/comments.css'
import { Link } from "react-router-dom";
import { useState } from "react";

export const Comments = () => {
  const comments = [
    { id: "fashgsa", message: "oh no, I hope I don't fall" },
    { id: "ghaioga", message: "brooklyn nine-nine" },
    { id: "gihasga", message: "react app testing third message" }
  ];

  return (
    <ol className={"text-center list-decimal"}>
      {comments.map(({ id, message }) => (
        <li key={id}>{message}</li>
      ))}
    </ol>
  )
}