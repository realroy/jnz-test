import { useEffect } from "react";
import styles from "./Map.module.css";

const jenosize = {
  lat: 13.8929727,
  lng: 100.51479,
};

export const Map = () => {
  useEffect(() => {
    window.initMap = function initMap() {
      if (!google) {
        return;
      }

      const map = document.getElementById("map");

      window.map = new google.maps.Map(map, {
        center: jenosize,
        zoom: 20,
      });

      const marker = new google.maps.Marker({ position: jenosize, map: window.map });
    };

    const googleMapScript = document.createElement("script");
    googleMapScript.src =
      "https://maps.googleapis.com/maps/api/js?key=&callback=initMap";
    googleMapScript.defer = true;
    googleMapScript.async = true;

    document.body.appendChild(googleMapScript);
  }, []);

  return (
    <div id="map" className={styles["container"]}>
      <div></div>
    </div>
  );
};
