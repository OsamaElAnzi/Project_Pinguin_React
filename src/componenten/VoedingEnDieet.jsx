import React from "react";
import "./VoedingEnDieet.css"; 

function VoedingEnDieet() {
  return (
    <div className="infoBlock">
      <div className="text animate-text">
        <h1>Voeding en Dieet</h1>
        <p>
          Voornamelijk eten pinguïns vis. Afrikaanse en humboldtpinguïns eten
          hoofdzakelijk ansjovis, aangevuld met sardines. Natuurlijk zullen ze
          andere zwermen vis die toevallig voor hun bek komen niet weigeren.
          Ook kreeften en inktvisjes staan mee op het menu. Door de
          overbevissing is de ansjovis echter zelden geworden in Zuid-Amerika.
          De meest direkt verwante soorten (magelhaen- en galapagospinguïns)
          alsook de dwerg- en geeloogpinguïns hebben voornamelijk vis op hun
          menu.
        </p>
        <p>
          De grootste soort, de keizerspinguïn, eet voornamelijk de
          Pleuragramma, een ijsvis die sterk op onze haring lijkt, en krill en
          inktvissen. De koningspinguïn eet soms inktvissen maar meestal kleine
          (ongeveer 4 cm) lichtgevende zwermvissen, die men lantaarnvissen
          noemt. Deze lantaarnvissen stijgen 's nachts tot het wateroppervlak en
          overdag zwemmen ze op een diepte van ongeveer 200 à 300 m.
        </p>
        <p>
          Omdat pinguïns 's nachts echter niet genoeg zien, moeten de
          koningspinguïns dus diep duiken. De drie kleinere soorten (Pygoscelis:
          adélie-, ezels- en kinbandpinguïns) eten hoofdzakelijk krill. Krill is
          een verzamelnaam voor verschillende soorten kleine, planktonische
          kreeftachtige diertjes, ook lichtgevende garnalen genoemd.
        </p>
        <p className="bron">
          Bron:{" "}
          <a href="https://www.pinguins.info/" target="_blank" rel="noopener noreferrer">www.pinguins.info</a>
        </p>
      </div>
      <img src="https://www.pinguins.info/Biologie/bas07_kopi002a.jpg" alt="Pinguin" className="pinguinImage" />
    </div>
  );
}

export default VoedingEnDieet;
