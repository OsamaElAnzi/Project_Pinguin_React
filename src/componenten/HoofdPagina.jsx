import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

function HoofdPagina() {
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "'Roboto Slab', serif",
        backgroundColor: "#f0f0f0",
        padding: "20px",
    };

    const textContainerStyle = {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginRight: "20px",
    };

    const projectStyle = {
        fontSize: "48px",
        color: "gray",
        margin: "0",
    };

    const pinguinStyle = {
        fontSize: "48px",
        color: "#333",
        margin: "0",
    };

    const imgStyle = {
        maxWidth: "400px",
        height: "auto",
    };

    return (
            <div style={containerStyle}>
                <div style={textContainerStyle}>
                    <span style={projectStyle}>Project</span>
                    <span style={pinguinStyle}>Pinguïn</span>
                </div>
                <img src="/image/Foto.png" alt="Foto van een Pinguïn" style={imgStyle} />
            </div>
    );
}

export default HoofdPagina;
