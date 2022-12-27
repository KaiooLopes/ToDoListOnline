import { NavLink } from "react-router-dom";
import { ContainerNavbar, Nav } from "./styles";
import { useState, useEffect, useRef } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);
  const { user } = useAuthValue();
  const { logout, loading } = useAuthentication();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 994) {
        setMenuOpen(true);
      } else if (window.innerWidth < 994) {
        setMenuOpen(false);
      }
    });
    window.addEventListener("click", (e) => {
      if (e.target !== ref.current) {
        setMenuOpen(false);
      }
    });
  }, []);

  return (
    <ContainerNavbar>
      <span>To Do List</span>
      <i
        className="fa-sharp fa-solid fa-ellipsis-vertical"
        onClick={() => setMenuOpen(!menuOpen)}
        open={menuOpen}
        ref={ref}
      ></i>
      <Nav open={menuOpen}>
        {user && (
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        )}
        {!user && (
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        )}

        {!user && (
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
        )}
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        {user && (
          <li>
            <button
              onClick={async () => {
                await logout();
              }}
            >
              Logout
            </button>
          </li>
        )}
        {loading && <li>saindi</li>}
      </Nav>
    </ContainerNavbar>
  );
};

export default Navbar;
