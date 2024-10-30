import React from "react";
import "./GedragEnSocialeStructuur.css"; 

function GedragEnSocialeStructuur() {
  return (
    <div className="infoBlock">
      <div className="text animate-text">
        <h1>Gedrag en Sociale Structuur</h1>
        <p>
          Onder algemeen gedrag verstaat men alles wat een pinguïn doet om
          zichzelf te onderhouden en verzorgen, zoals veren poetsen, warmte
          regelen e.d. Het is dus gedrag dat 1 individu toont, meestal zonder
          interactie met anderen.
        </p>
        <p>
          Baden en veren poetsen is een van de belangrijkste gedragingen van een
          pinguïn: Lichaamsverzorging is absoluut levensnoodzakelijk. Het is met
          name door het insmeren met stuitvet dat hun verenkleed waterdicht
          gemaakt wordt. Enkel op die manier zijn ze beschermd tegen de kou en
          het water.
        </p>
        <p>
          Bij pinguïns gebeurt de warmte-isolatie door hun verenkleed en de
          daaronderliggende vetlaag. Het verenkleed is heel dicht en wordt
          regelmatig verzorgd en ingevet, zodat het een
          water-ondoorlaatbaar omhulsel vormt.
        </p>
        <p>
          Dit vetlaagje zorgt er ook voor dat de wrijving in het water minimaal
          is, zodat een pinguïn er als het ware door vliegt.
        </p>
        <p>
          Broedgedrag bij koppels is een teken van liefde om de veren van de
          partner te ordenen op plaatsen die voor hem/haar niet goed bereikbaar
          zijn.
        </p>
        <p className="bron">
          Bron:{" "}
          <a href="https://www.pinguins.info/" target="_blank" rel="noopener noreferrer">
            www.pinguins.info
          </a>
        </p>
      </div>
      <img
        src="https://img.hbvl.be/ZP3OGIln2k3wpACKm49--E2yNN8=/1280x853/smart/https%3A%2F%2Fstatic.hbvl.be%2FAssets%2FImages_Upload%2Farch%2F2009%2F07%2F13%2F523912%2Ftekort-aan-vrouwtjes-drijft-mannelijke-pinguins-in-elkaars-armen_1_515x0.jpg"
        alt="Pinguin gedrag"
        className="pinguinImage"
      />
    </div>
  );
}

export default GedragEnSocialeStructuur;


