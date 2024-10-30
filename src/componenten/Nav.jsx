import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import HabitatEnLeefOmgeving from "./HabitatEnLeefOmgeving";
import BedreigingEnBeschermingsMaatregelen from "./BerdreigingEnBeschermigsMaatregelen";
import GedragEnSocialeStructuur from "./GedragEnSocialeStructuur";
import VoedingEnDieet from "./VoedingEnDieet";
import HoofdPagina from "./HoofdPagina";

function Nav() {
  const bgNavStyle = {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    fontFamily: "Arial, sans-serif",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333333",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    padding: "10px 15px",
    transition: "color 0.3s, background-color 0.3s",
    "&:hover": {
      color: "#4CAF50",
    },
  };

  const activeLinkStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    borderRadius: "5px",
  };

  const imgWidthStyle = {
    maxWidth: "75px",
    height: "auto",
  };

  return (
    <Router>
      <nav style={bgNavStyle}>
        <img src="/image/Logo.png" alt="Logo" style={imgWidthStyle} />
        <div style={{ display: "flex", gap: "15px" }}>
          <NavLink
            to="/Home"
            style={linkStyle}
            className={({ isActive }) =>
              isActive ? activeLinkStyle : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/habitat-en-leefomgeving"
            style={linkStyle}
            className={({ isActive }) =>
              isActive ? activeLinkStyle : undefined
            }
          >
            Habitat en Leefomgeving
          </NavLink>
          <NavLink
            to="/bedreiging-en-beschermingsmaatregelen"
            style={linkStyle}
            className={({ isActive }) =>
              isActive ? activeLinkStyle : undefined
            }
          >
            Bedreiging en Beschermingsmaatregelen
          </NavLink>
          <NavLink
            to="/gedrag-en-sociale-structuur"
            style={linkStyle}
            className={({ isActive }) =>
              isActive ? activeLinkStyle : undefined
            }
          >
            Gedrag en Sociale Structuur
          </NavLink>
          <NavLink
            to="/voeding-en-dieet"
            style={linkStyle}
            className={({ isActive }) =>
              isActive ? activeLinkStyle : undefined
            }
          >
            Voeding en Dieet
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/Home" element={<HoofdPagina />} />
        <Route
          path="/habitat-en-leefomgeving"
          element={<HabitatEnLeefOmgeving />}
        />
        <Route
          path="/bedreiging-en-beschermingsmaatregelen"
          element={<BedreigingEnBeschermingsMaatregelen />}
        />
        <Route
          path="/gedrag-en-sociale-structuur"
          element={<GedragEnSocialeStructuur />}
        />
        <Route path="/voeding-en-dieet" element={<VoedingEnDieet />} />
        <Route path="*" element={<HoofdPagina />} />
      </Routes>
    </Router>
  );
}

export default Nav;
