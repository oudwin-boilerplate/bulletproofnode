import express from 'express';
import config from '../config';
import apiRoutes from '../api';
import catch404 from '../errors/catch404';
import globalErrorHandler from '../errors';

export default ({ app }: { app: express.Application }) => {
  //
  // ! HEALTH CHECK POINTS
  // This is used so external services can check if app is online or offline
  app.get('/status', (req: express.Request, res: express.Response) => {
    res.status(200).end();
  });
  app.head('/status', (req: express.Request, res: express.Response) => {
    res.status(200).end();
  });

  // app.use(cors()) ?

  // Middleware that transforms the raw string of req.body into json
  app.use(
    express.json({
      limit: '10kb',
    })
  );
  // Load API Routes
  app.use(config.api.prefix, apiRoutes());

  /// catch 404 and forward to error handler
  app.use(catch404);

  app.use(globalErrorHandler);
};
