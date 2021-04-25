import { Application } from 'express';
import expressLoader from './express';
import databaseLoader from './database';
import Logger from './logger';

export default async ({
  expressApp,
}: {
  expressApp: Application;
}): Promise<void> => {
  const dbConnection = await databaseLoader();
  Logger.info('DB loaded and connected');

  // Here I might pass DbConnection to agendaJS to schedule jobs (like sending email)
  // Then I might load the jobs

  expressLoader({ app: expressApp });
  Logger.info('Express Loaded');
};
