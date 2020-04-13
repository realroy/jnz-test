import { useEffect } from "react";
import styles from "./Map.module.css";

const jenosize = {
  lat: 13.8929727,
  lng: 100.51479,
};

export const Map = () => {
  useEffect(() => {
    fetch("/api/Jenosize/map")
      .then((res) => res.json())
      .then(({ API_KEY }) => {
        window.initMap = function initMap() {
          if (!google) {
            return;
          }

          const map = document.getElementById("map");

          window.map = new google.maps.Map(map, {
            center: jenosize,
            zoom: 20,
          });

          new google.maps.Marker({ position: jenosize, map: window.map });
        };

        if (document.getElementById("googleMap")) {
          return;
        }
        const googleMapScript = document.createElement("script");
        googleMapScript.id = "googleMap";
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
        googleMapScript.defer = true;
        googleMapScript.async = true;

        document.body.appendChild(googleMapScript);
      })
      .catch(console.error);
  }, []);

  return <div id="map" className={styles["container"]}></div>;
};
