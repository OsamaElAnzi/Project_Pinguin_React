import React from "react";

function HabitatEnLeefOmgeving() {
  const imgStyle = {
    maxWidth: "400px",
    height: "auto",
};
  return (
    <>
      <h1>Habitat en de leefomgeving</h1>
      <div className="infoBlock">
        <div className="text">
          <p>
            Elke pinguïnsoort leeft op een ander deel van de wereld. Veelal
            leven ze op het zuidelijk halfrond. Pinguïns komen voor op en rond
            Antarctica, Nieuw-Zeeland, Australië, de Galapagoseilanden,
            Zuid-Afrika en het zuiden van Zuid-Amerika. Veel mensen denken dat
            pinguïns ook op de Noordpool leven. Dit is echter niet zo. Er komen
            geen pinguïns voor op de Noordpool. IJsberen leven wel op de
            Noordpool. Een pinguïn en een ijsbeer hebben elkaar nog nooit gezien
            in de natuur!
          </p>
          <p className="BronVermeding">https://www.beeksebergen.nl/</p>
        </div>
        <img src="public\image\antarctica.jpg" alt="foto" style={imgStyle}/>
      </div>
    </>
  );
}

export default HabitatEnLeefOmgeving;
