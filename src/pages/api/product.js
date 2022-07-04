export default async function handler(request, response) {
  const requestHandlers = {
    get: async (req, res) => {
      const { sku } = req.query;

      const apiResponse = await fetch(
        `${process.env.TECH_STORE_SHOP_API_BASE_URL}/products/${sku}`
      );

      const data = await apiResponse.json();

      return res.status(apiResponse.status).send(data);
    },
    post: async (req, res) => {
      const apiResponse = await fetch(
        `${process.env.TECH_STORE_SHOP_API_BASE_URL}/products`,
        {
          method: 'POST',
          body: JSON.stringify(req.body),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await apiResponse.json();

      return res.status(apiResponse.status).send(data);
    },
    put: async (req, res) => {
      const apiResponse = await fetch(
        `${process.env.TECH_STORE_SHOP_API_BASE_URL}/products/${req.query.sku}`,
        {
          method: 'PUT',
          body: JSON.stringify(req.body),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await apiResponse.json();

      return res.status(apiResponse.status).send(data);
    },
    delete: async (req, res) => {
      await fetch(
        `${process.env.TECH_STORE_SHOP_API_BASE_URL}/products/${req.query.sku}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return res.status(201).send();
    },
  };

  return requestHandlers[request.method.toLowerCase()](request, response);
}
