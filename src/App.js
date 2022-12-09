import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
import { AuthProvider } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import background from "./background.png";
import CreateColumn from "./pages/CreateColumn";
import Column from "./pages/Column";

const desktop = 994;

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.80),rgba(0, 0, 0, 1)), url(${background}), repeat-y;
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover;
    margin: 0 auto;

    @media (min-width: ${desktop}px){
      width: 70%;
    }
  }
  

  *{
    margin: 0;
    font-family: sans-serif;
  }
`;

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/card/create"
              element={user ? <CreateColumn /> : <Navigate to="/" />}
            />
            <Route
              path="/card/:id"
              element={user ? <Column /> : <Navigate to="/" />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
