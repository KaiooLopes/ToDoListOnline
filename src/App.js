import { GlobalStyle, Container } from "./AppStyles";
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

import CreateColumn from "./pages/CreateColumn";
import Column from "./pages/Column";

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
    return <></>;
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <GlobalStyle />
        <BrowserRouter>
          <Container>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
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
                element={user ? <CreateColumn /> : <Navigate to="/login" />}
              />
              <Route
                path="/card/:id"
                element={user ? <Column /> : <Navigate to="/login" />}
              />
            </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
