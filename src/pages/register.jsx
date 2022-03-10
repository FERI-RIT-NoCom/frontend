import '../styles/register.css'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {registerUser} from "../services/auth";

export const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [repeatPassword, setRepeatPassword] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  // Generate jsx error message
  const renderErrorMessage = () => (<div className="text-red-500">{errorMessage}</div>);

  const submitHandler = (e) => {
    e.preventDefault()
    // Clear error messages
    setErrorMessage(null)

    if (password !== repeatPassword) {
      setErrorMessage("Password doesn't match")
      return
    }

    registerUser(username, email, password).then(() => {
      navigate('/login', {replace: true})
    }).catch((err) => {
      setErrorMessage(err)
    })
  }

  return (
    <div className={"flex flex-col items-center h-screen p-4 bg-white"}>
      <h3 className={"text-3xl tracking-wide text-center"}>Registration</h3>

      <form className={"flex flex-col mx-14 mt-2"} onSubmit={submitHandler}>
        {renderErrorMessage()}
        <input
          name={"username"}
          className={"register-input"}
          type={"text"}
          placeholder={"Username"}
          required={true}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name={"email"}
          className={"register-input"}
          type={"email"}
          placeholder={"Email"}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name={"password"}
          className={"register-input"}
          type={"password"}
          placeholder={"Password"}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          name={"passwordRepeat"}
          className={"register-input"}
          type={"password"}
          placeholder={"Repeat Password"}
          required={true}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />

        <button
          className={"bg-purple-600 rounded-md text-white px-8 py-1 mt-2 self-center"}
          type={"submit"}
        >
          Register
        </button>
        <p className={"self-center text-sm mt-2"}>
          Already registered? Login <Link to={"/login"} className={"text-purple-600"}>here</Link>
        </p>
      </form>
    </div>
  )
}