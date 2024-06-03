export async function authGoogleHandlers(req, res) {
  try {
    const { token, email } = req.body;
    console.log(token, email);
    res.status(200).json({ message: `hola google` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
