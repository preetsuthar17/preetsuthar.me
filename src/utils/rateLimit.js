const requests = new Map();

const rateLimit = (limit, interval) => (handler) => async (req, res) => {
  const ip =
    req.headers['x-forwarded-for'] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    'unknown';
  if (!requests.has(ip)) {
    requests.set(ip, { count: 0, firstRequest: Date.now() });
  }
  const data = requests.get(ip);
  if (Date.now() - data.firstRequest > interval) {
    // Reset the count every interval
    data.count = 0;
    data.firstRequest = Date.now();
  }
  data.count += 1;
  if (data.count > limit) {
    return res
      .status(429)
      .json({ message: 'Too many requests, please try again later.' });
  }
  requests.set(ip, data);
  return handler(req, res);
};

module.exports = rateLimit;
