export default async function handler(req, res) {
  const response = await fetch(
    `${process.env.TECH_STORE_USER_API_BASE_URL}/users/${req.query.id}`,
    {
      method: 'PUT',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();

  return res.send(data);
}
