import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import {
  ContainerRegister,
  FormRegister,
  BtnRegister,
  Error,
  SignInOrLogin,
} from "./styles";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [RegisterEmail, setRegisterEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, loading, error: authError } = useAuthentication();
  const [error, setError] = useState("");

  useEffect(() => {
    if (authError) {
      setError(authError.msg);
    }
  }, [authError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("passwords need to be the same");
      return;
    }

    createUser({ email: RegisterEmail, password, displayName });
  };

  return (
    <ContainerRegister>
      <SignInOrLogin>
        Already have an account? <NavLink to="/login">Login</NavLink>
      </SignInOrLogin>
      <FormRegister onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="displayName"
            required
            placeholder="Digit your name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="Register"
            value={RegisterEmail}
            required
            placeholder="Digit your email"
            onChange={(e) => setRegisterEmail(e.target.value)}
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
        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            placeholder="Digit your password again"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {error && <Error>{error}</Error>}
        {!loading && <BtnRegister>Register</BtnRegister>}
        {loading && <BtnRegister>Loading...</BtnRegister>}
      </FormRegister>
    </ContainerRegister>
  );
};

export default Register;
