export default async function handler(req, res) {
  try {
    await fetch(`${process.env.TECH_STORE_USER_API_BASE_URL}/users/login`, {
      body: JSON.stringify(req.body),
    });

    res.redirect('/', 302);
  } catch (error) {
    console.log("Can't log in", error.message);
    res.redirect('/', 307);
  }
}
