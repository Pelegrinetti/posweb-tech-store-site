export default async function handler(req, res) {
  const response = await fetch(
    `${process.env.TECH_STORE_SHOP_API_BASE_URL}/orders`,
    {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();

  return res.send(data);
}
