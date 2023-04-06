import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import { onMount } from "solid-js";
import "./map.scss";

// otherwise, with webpack, the marker won't find the marker icon in production
L.Marker.prototype.setIcon(L.icon({
    iconUrl:markerIcon,
    iconAnchor: [10, 20],
    popupAnchor: [2, -20],
}))

function Map() {
  onMount(() => {
    const map = L.map("map").setView(
      [48.65218428861113, -1.9917653213299666],
      13
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // add a single marker to a layer. note it's in an array
    let markerLayer = L.layerGroup([
      L.marker([48.65218428861113, -1.9917653213299666])
        .addTo(map)
        .bindPopup("Cabinet")
        .openPopup(),
    ]);
  });

  return <div id="map" />;
}

export default Map;
