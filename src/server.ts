import createApp from './app';
import config from './config';
import Logger from './loaders/logger';

async function startServer() {
  const app = await createApp();

  app
    .listen(config.port, () => {
      Logger.info(`
        ################################################
        🛡️  Server listening on port: ${config.port} 🛡️
        ################################################
      `);
    })
    .on('error', (err) => {
      Logger.error(err);
      process.exit(1);
    });
}
