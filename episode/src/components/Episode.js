import React from "react";
import "./style.css";
const CharactersPage = React.lazy(() => import("character/CharactersPage"));

export default function Episode(props) {
  const episode = props.episode;
  const episodeNo = +episode.episode.slice(-2);
  const seasonNo = +episode.episode.slice(1, 3);
  const characterIds = [];
  episode.characters.forEach((chUrl) => {
    let chId = chUrl.substring(chUrl.lastIndexOf("/") + 1);
    characterIds.push(chId);
  });
  return (
    <div className="episode">
      <p className="episode-title">
        #{episode.id} - {episode.name}
      </p>
      <div className="episode-description">
        <p>
          This is {episodeNo}st episode in {seasonNo}st session. It was aired on{" "}
          {episode.air_date}. There are total of {characterIds.length} featured
          characters in this episode.
        </p>
        <CharactersPage characterIds={characterIds} />
      </div>
    </div>
  );
}
