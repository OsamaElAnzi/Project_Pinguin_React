import React from "react";

function BedreigingEnBeschermingsMaatregelen() {
  const imgStyle = {
    maxWidth: "400px",
    height: "200px",
  };
  return (
    <>
      <h1>Bedreiging en beschermingsmaatregelen</h1>
      <div className="infoBlock">
        <div className="text">
          <p>
            De grootste vijanden van de pinguïn in zee zijn vooral orka’s,
            zeeluipaarden en haaien. Op het land moeten de pinguïns de eieren
            goed in de gaten houden, want deze kunnen geroofd worden door de
            verschillende vogels. Daarnaast zijn ook katten, honden en ratten
            gevaarlijk voor pinguïns. De allergrootste vijand van de pinguïn is
            toch de mens. Dit komt door olievervuiling, overbevissing, het
            verdwijnen van leefgebied en toerisme. Sommige pinguïnsoorten werden
            bijna uitgeroeid om hun vet, de eieren en de veren van de pinguïn.
            De Afrikaanse pinguïn is daarom bedreigd. De afgelopen 100 jaar is
            de populatie Afrikaanse pinguïns met 90% afgenomen! De rol van
            dierentuinen is het behouden en beschermen van bedreigde
            diersoorten. Europese parken werken nauw met elkaar samen om dit
            doel te bereiken en doen dit met een managementprogramma (EEP). Ook
            de Afrikaanse pinguïn is hier onderdeel van. Zo wordt er een gezonde
            reservepopulatie behouden. Meer over soortbehoud en onze rol hierin
            ontdek je hier.
          </p>
          <p className="BronVermeding">https://www.beeksebergen.nl/</p>
        </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlC0hgVfiyKTnOgVPGS5GxZX0fiKG89aLapQ&s"
            alt="foto"
            style={imgStyle}
          />
      </div>
    </>
  );
}
export default BedreigingEnBeschermingsMaatregelen;
