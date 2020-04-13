import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'

import { DefaultLayout } from "../../layouts";
import { Restaurant } from "../../components";

async function fetchRestaurants(query = {}, url = "/api/Jenosize/restaurants") {
  const resolvedQuery = new URLSearchParams(query).toString()
  const resolvedUrl = Object.keys(query).length ?
    `${url}?${resolvedQuery}`
    : url
    
  const res = await fetch(resolvedUrl);
  const restaurants = await res.json();

  return restaurants;
}

const JenosizeRestaurantPage = () => {
  const title = "Restaurants Search";
  const [restaurants, setRestaurants] = useState([]);
  const router = useRouter()
  useEffect(() => {
    fetchRestaurants(router.query).then(setRestaurants).catch(console.error);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <DefaultLayout>
        <div style={{ height: '100%', overflow: 'auto' }}>
          {restaurants.map(({ id, name, rating, photos }) => (
            <Restaurant key={id} name={name} rating={rating} photos={photos} />
          ))}
        </div>
      </DefaultLayout>
    </>
  );
};

export default JenosizeRestaurantPage;
