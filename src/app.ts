import express from 'express';
import Logger from './loaders/logger';

async function createApp(): Promise<express.Application> {
  const app = express();

  await require('./loaders').default({ expressApp: app });

  Logger.info('Application Loaded');

  return app;
}
export default createApp;
