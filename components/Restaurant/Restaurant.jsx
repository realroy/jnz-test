import styles from "./Restaurant.module.css";
import { useEffect, useState } from "react";

async function fetchRestaurantImg(
  photos = [],
  url = "/api/Jenosize/restaurants/photo"
) {
  if (!photos[0]) {
    return "";
  }

  const { photo_reference } = photos[0];
  const res = await fetch(`${url}?photoreference=${photo_reference}`);
  const { imgSrc } = await res.json();

  return imgSrc;
}

export const Restaurant = ({ name, rating, photos, alt }) => {
  const [src, setSrc] = useState("")

  useEffect(() => {
    fetchRestaurantImg(photos).then(setSrc).catch(console.error);
  }, [photos]);

  return (
    <div className={styles.container}>
      <img loading="lazy" className={styles.img} src={src} alt={alt} />
      <div>
        <h2>{name}</h2>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};
