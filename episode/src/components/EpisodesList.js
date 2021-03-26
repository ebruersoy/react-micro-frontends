import React, { useState, useEffect } from "react";
import Episode from "./Episode";
import * as api from "../utils/api";

export default function EpisodesList(props) {
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState(api.getBaseEpisodeUrl());

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };
  const fetchData = async () => {
    const data = await api.getEpisodes(url);
    setUrl(data.info.next);
    setListItems(() => {
      return [...listItems, ...data.results];
    });
  };
  useEffect(() => {
    if (!isFetching) return;
    if (url == null) {
      setIsFetching(false);
      return;
    }
    fetchMoreListItems();
  }, [isFetching]);

  const fetchMoreListItems = () => {
    fetchData();
    setIsFetching(false);
  };

  return (
    <div className="episode-list">
      {listItems.map((episode) => (
        <React.Suspense key={episode.id} fallback="Loading Episodes...">
          <Episode key={episode.id} episode={episode} />
        </React.Suspense>
      ))}
      {isFetching && <h1>Fetching more list items...</h1>}
    </div>
  );
}
