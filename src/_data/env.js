require('dotenv').config();

module.exports = {
  trackingEnabled: process.env.TRACKING_ENABLED || false,
};