const axios = require("axios");
const Client = require("@googlemaps/google-maps-services-js").Client;

const client = new Client({});

export default async (req, res) => {
  const { photoreference, maxheight = 400 } = req.query

  try {
    const response = await client.placePhoto(
      {
        params: {
          photoreference,
          key: process.env.GOOGLE_API_KEY,
          maxheight
        },
        timeout: 1000,
      },
      axios
    );

    res.json({ imgSrc: response.request.res.responseUrl });
  } catch (error) {
    console.log(error)
    res.json({ error: true });
  }
};
