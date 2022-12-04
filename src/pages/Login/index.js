import { useState } from "react";
import {
  ContainerLogin,
  SignInOrLogin,
  FormLogin,
  BtnLogin,
  Error,
} from "./styles";
import { useAuthentication } from "../../hooks/useAuthentication";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, loading, error } = useAuthentication();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ loginEmail, password });
  };

  return (
    <ContainerLogin>
      <SignInOrLogin>
        Don't have an account? <NavLink to="/register">Register</NavLink>
      </SignInOrLogin>
      <FormLogin onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="loginEmail"
            value={loginEmail}
            required
            placeholder="Digit your email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            required
            placeholder="Digit your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <Error>{error.msg}</Error>}
        {!loading && <BtnLogin>Login</BtnLogin>}
        {loading && <BtnLogin>Loading...</BtnLogin>}
      </FormLogin>
    </ContainerLogin>
  );
};

export default Login;
