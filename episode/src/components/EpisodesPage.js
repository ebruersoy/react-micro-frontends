import React from "react";
import EpisodesList from "./EpisodesList";

export default function EpisodesPage(props) {
  return (
    <React.Suspense fallback={`Loading Episodes...`}>
      <EpisodesList />
    </React.Suspense>
  );
}
