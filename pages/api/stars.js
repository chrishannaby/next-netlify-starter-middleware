export default async function handler(req, res) {
  const response = await fetch("https://api.github.com/repos/vercel/next.js");
  const jsonData = await response.json();
  res.status(200).json(jsonData);
}
