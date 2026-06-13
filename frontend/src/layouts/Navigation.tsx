import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/tech-stack">Tech Stack</NavLink>
      <NavLink to="/architecture">Architecture</NavLink>
      <NavLink to="/engineering">Engineering</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/certificates">Certificates</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navigation;
