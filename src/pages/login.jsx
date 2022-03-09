import '../styles/login.css'
import {Link} from "react-router-dom";
import {useState} from "react";

export const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Generate jsx error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className={"w-full h-screen flex justify-center items-center bg-gray-100"}>
      <div className={"w-1/2 shadow-lg rounded-lg p-4 bg-white"}>
        <h3 className={"text-3xl tracking-wide text-center"}>Good to see you again! 👋</h3>

        <form className={"flex flex-col mx-14 mt-2"} onSubmit={submitHandler}>
          <input className={"login-input"} type={"email"} placeholder={"Email"}/>
          <input className={"login-input"} type={"password"} placeholder={"Password"}/>

          <Link to={""} className={"text-purple-600 text-sm my-2"}>Forgot Password?</Link>

          <button className={"bg-purple-600 rounded-md text-white px-8 py-1 mt-2 w-1/2 self-center"} type={"submit"}>Login</button>
          <p className={"self-center text-sm mt-2"}>New? Register <Link to={"/register"} className={"text-purple-600"}>here</Link></p>
        </form>
      </div>
    </div>
  )
}