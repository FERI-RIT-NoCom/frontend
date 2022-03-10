import '../styles/login.css'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {loginUser} from "../services/auth";

export const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  // Generate jsx error message
  const renderErrorMessage = () =>
    errorMessage != null && (
      <div className="text-red-500">{errorMessage}</div>
    );

  const submitHandler = (e) => {
    e.preventDefault()
    // Clear error messages
    setErrorMessage(null)

    loginUser(username, password).then(res => {
      navigate('/', {replace: true})
    }).catch((err) => {
      setErrorMessage(err)
    })
  }

  return (
    <div className={"flex flex-col items-center h-screen p-4 bg-white"}>
      <h3 className={"text-3xl tracking-wide text-center"}>Good to see you again! 👋</h3>

      <form className={"flex flex-col space-y-2 mt-2 max-w-sm"} onSubmit={submitHandler}>
        {renderErrorMessage()}

        <input
          className={"login-input"}
          type={"text"}
          placeholder={"Username"}
          required={true}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={"login-input"}
          type={"password"}
          placeholder={"Password"}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to={""} className={"text-purple-600 text-sm my-2"}>Forgot Password?</Link>

        <button
          className={"bg-purple-600 rounded-md text-white px-8 py-1 mt-2 self-center"}
          type={"submit"}
        >
          Login
        </button>
        <p className={"self-center text-sm mt-2"}>
          New? Register <Link to={"/register"} className={"text-purple-600"}>here</Link></p>
      </form>
    </div>
  )
}