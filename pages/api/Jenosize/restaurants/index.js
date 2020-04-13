const axios = require("axios");
const Client = require("@googlemaps/google-maps-services-js").Client;

const client = new Client({});
const JENOSIZE = { lat: 13.8929727, lng: 100.51479 };
const API_KEY = process.env.GOOGLE_API_KEY;

export default async (req, res) => {
  const { q } = req.query;
  if (!q) {
    try {
      const response = await client.placesNearby(
        {
          params: {
            location: JENOSIZE,
            key: API_KEY,
            radius: 1000,
            type: "restaurant",
          },
          timeout: 1000,
        },
        axios
      );

      res.json(response.data.results);
    } catch (error) {
      res.json({ error: true });
    }
  } else {
    try {
      const response = await client.textSearch(
        {
          params: {
            location: JENOSIZE,
            radius: 1000,
            key: API_KEY,
            query: q,
            type: "restaurant",
          },
          timeout: 1000,
        },
        axios
      );
      res.json(response.data.results)
    } catch (error) {
      res.json({ error: true });
    }
  }
};
