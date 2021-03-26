import React from "react";
import "./style.css";
const CharactersPage = React.lazy(() => import("character/CharactersPage"));

export default function Location(props) {
  const location = props.location;
  const residentIds = [];
  location.residents.forEach((chUrl) => {
    let chId = chUrl.substring(chUrl.lastIndexOf("/") + 1);
    residentIds.push(chId);
  });
  return (
    <div className="location">
      <p className="location-title">
        #{location.id} - {location.name}
      </p>
      <div className="location-description">
        <p>
          This is a {location.type} located in {location.dimension}. There are
          total of {residentIds.length} known residents that are originated from
          here.
        </p>
        <CharactersPage characterIds={residentIds} />
      </div>
    </div>
  );
}
