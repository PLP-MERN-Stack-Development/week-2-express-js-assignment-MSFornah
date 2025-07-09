const auth = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey || apiKey !== '12345') { // Replace '12345' with your preferred API key
    return res.status(401).json({ message: 'Unauthorized. Invalid or missing API key.' });
  }

  next(); // Proceed if API key is valid
};

module.exports = auth;
