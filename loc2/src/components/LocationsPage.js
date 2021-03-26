import React from "react";
import LocationsList from "./LocationsList";

export default function LocationsPage(props) {
  return (
    <React.Suspense fallback={`Loading Locations...`}>
      <LocationsList />
    </React.Suspense>
  );
}
