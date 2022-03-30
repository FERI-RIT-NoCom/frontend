import '../styles/comments.css'
import { Link } from "react-router-dom";
import { useState } from "react";

export const Comments = () => {
    const comments = [
        { id: "fashgsa", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dolor porta, " +
                "lacinia ligula ut, convallis libero. Quisque vitae nulla ullamcorper, mattis purus scelerisque, " +
                "dignissim nibh. Etiam vitae suscipit odio. Vestibulum condimentum lacus id lectus porttitor convallis. " +
                "Morbi porta felis nulla, eget ultricies orci elementum a. Maecenas eu magna tortor. Nulla facilisi. Nulla " +
                "massa justo, egestas sit amet ullamcorper ac, porttitor vitae est. Aliquam egestas, ex quis pharetra aliquam, " +
                "felis neque mollis felis, quis interdum lorem eros ac sem. Phasellus in eleifend mauris. ",
            author: "matic jeseničnik", created: "2021-12-12 12:14:55.555", cond: true, nr_likes: 12 },
        { id: "ghaioga", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit sapien tellus, " +
                "non consectetur ligula ultricies consectetur. Vestibulum nec augue orci. Fusce facilisis lacus tellus, " +
                "sed aliquam eros sollicitudin eget. Sed eleifend dui enim, vel facilisis justo eleifend in. Sed vestibulum, " +
                "turpis dapibus molestie tincidunt, justo erat hendrerit tortor, in. ",
            author: "alen budimir", created: "2021-12-12 12:14:55.555", cond: false, nr_likes: 4 },
        { id: "gihasga", message: "react app testing third message", author: "anonymous", created: "2021-12-12 12:14:55.555",
            cond: true, nr_likes: 7 }
    ];

  let [filteredComments, setFilteredComments] = useState(comments)

  return (
    <div className={"space-y-5 grid justify-items-center py-6"}>
      <label className={"block w-3/4 object-center top-4"}>
        <span className={"sr-only"}>Search</span>
        <input
          className={"placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"}
          placeholder="Search..." type="text" name="search"
          onChange={(e) => {
              setFilteredComments(comments.filter((el) => {
                  return el.author.includes(e.target.value.toString()) || el.message.includes(e.target.value.toString());
              }))
          }}/>
      </label>

      <Link to={"/addComment"} state={{ url: window.location.href }}
            className={"w-3/4 bg-green-400 border border-black rounded p-2 text-center text-white font-bold"}>
        New comment
      </Link>

        {filteredComments.map(({ id, message, author, created, cond, nr_likes}) => (
            <div key={id} className={"rounded shadow-gray-300 shadow-2xl border border-gray-600 w-3/4 px-6 py-3"}>
                <div className={"text-gray-800 text-l float-left w-full"}>{author}
                    {/*<div className={"text-right float-right text-xs text-gray-500"}>{created}</div>*/}
                </div>
                <div className={"text-gray-500"}>{message}</div>
                <div className={"mt-3"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 float-left mr-1" fill={cond ? "lightblue" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <div className={"float-left mr-3"}>
                        {nr_likes}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 float-left mr-1" fill={cond ? "#ffcccb" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                    </svg>
                    <div className={"float-left mr-3"}>
                        {Math.floor(Math.random() * 10)}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}