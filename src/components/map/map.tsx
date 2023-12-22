import L from "leaflet";
import markerIcon from "../../assets/images/marker-icon.png";
import { Component, onMount } from "solid-js";
import "./map.scss";

// otherwise, with webpack, the marker won't find the marker icon in production
L.Marker.prototype.setIcon(
  L.icon({
    iconUrl: markerIcon.src,
    iconAnchor: [10, 20],
    popupAnchor: [2, -20],
  })
);

const Map: Component = () => {
  onMount(() => {
    const map = L.map("map").setView(
      [48.64845832565377, -2.0058909585597653],
      13
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // add a single marker to a layer. note it's in an array
    L.layerGroup([
      L.marker([48.64845832565377, -2.0058909585597653])
        .addTo(map)
        .bindPopup("Cabinet")
        .openPopup(),
    ]);
  });

  return <div id="map" />;
}

export default Map;
