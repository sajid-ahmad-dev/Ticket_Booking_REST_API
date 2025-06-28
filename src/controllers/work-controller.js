const info = (req, res) => {
  return res.json({
    success: true,
    message: "API is Live on /info",
    data: {},
    error: {},
  });
};

module.exports = { info };
