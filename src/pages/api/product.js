export default async function handler(req, res) {
  const { sku } = req.query;

  const response = await fetch(
    `${process.env.TECH_STORE_SHOP_API_BASE_URL}/products/${sku}`
  );

  const data = await response.json();

  return res.send(data);
}
