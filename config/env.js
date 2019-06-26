const path = require('path');

if (process.env.NODE_ENV === 'production') {
  console.log('\n');
  console.log('<---------------------------------------------------------->');
  console.log('| PRODUCTION mode, be mindful of the environment variables |');
  console.log('<---------------------------------------------------------->');
  console.log('\n');
}

const envPath = path.resolve(__dirname, '../.env');
require('dotenv').config({ path: envPath });

const {
  HOME_LOCATION: home,
  API_LOCATION: api,
  FORUM_LOCATION: forum,
  NEWS_LOCATION: news,
  LOCALE: locale,
  STRIPE_PUBLIC: stripePublicKey
} = process.env;

const locations = {
  homeLocation: home,
  apiLocation: api,
  forumLocation: forum,
  newsLocation: news
};

module.exports = Object.assign(locations, { locale, stripePublicKey });
