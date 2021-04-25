import config from './config';
import express from 'express';

import Logger from './loaders/logger';

async function createApp(): express.Application {
  const app = express();

  await require('./loaders').default({ expressApp: app });

  return app;
}
export default createApp;
