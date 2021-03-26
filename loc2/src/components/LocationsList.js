import React, { useState, useEffect } from "react";
import Location from "./Location";
import * as api from "../utils/api";

export default function LocationsList(props) {
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState(api.getBaseLocationUrl());

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
    const data = await api.getLocations(url);
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
    <div className="location-list">
      {listItems.map((location) => (
        <React.Suspense key={location.id} fallback="Loading Locations...">
          <Location key={location.id} location={location} />
        </React.Suspense>
      ))}
      {isFetching && <h1>Fetching more list items...</h1>}
    </div>
  );
}
