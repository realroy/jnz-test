export default async (req, res) => {
  res.json({ API_KEY: process.env.GOOGLE_API_KEY || '' })
};
