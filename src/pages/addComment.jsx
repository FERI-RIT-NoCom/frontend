import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import { addComment } from "../services/comments";

export const AddComment = () => {
    const navigate = useNavigate();
    const [comment, setComment] = useState({})
    const [errorMessage, setErrorMessage] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        // Clear error messages
        setErrorMessage(null);

        addComment("https://google.com", comment, false).then(() => {
            navigate("/comments", {replace: true});
        }).catch((err) => {
            setErrorMessage(err);
        })
    }

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

    return (
        <div className={"space-y-5 grid justify-items-center py-6"}>
            <form onSubmit={submitHandler} className={"w-3/4 text-sm"}>
                <label className={"block object-center top-4 mb-4"}>
                    <span className={"sr-only"}>Search</span>
                    <textarea
                        className={"placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 " +
                            "rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm" +
                            "focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"}
                        placeholder="Write a new comment" name="comment"
                        onChange={(e) => {
                            setComment(e.target.value)
                        }}
                    />
                </label>
                <Link to={"/comments"} className={"w-5/12 mr-2 bg-blue-400 border border-black rounded p-2 text-center text-white font-bold float-left"}>
                    Filter comments
                </Link>
                <button type={"submit"} className={"w-5/12 bg-green-400 border border-black rounded p-2 text-center text-white font-bold float-right text-sm"}>
                    Add comment
                </button>
            </form>

            {comments.map(({ id, message, author, created}) => (
                <div key={id} className={"rounded shadow-gray-300 shadow-2xl border border-gray-600 w-3/4 px-6 py-3"}>
                    <div className={"text-gray-800 text-l float-left w-full"}>{author}
                        {/*<div className={"text-right float-right text-xs text-gray-500"}>{created}</div>*/}
                    </div>
                    <div className={"text-gray-500"}>{message}</div>
                </div>
            ))}
        </div>
    )
}