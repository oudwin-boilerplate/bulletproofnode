import { connect } from 'mongoose';
import config from '../../config';
import ApiError from '../../errors/ApiError';

export default async (): Promise<any> => {
  if (!config.database.url || !config.database.password)
    throw ApiError.create(
      'Database url and password not specified in .env'
    ).status(500);
  const db = <string>(
    config.database.url.replace('<PASSWORD>', config.database.password)
  );
  const connection = await connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    // avoid mongoose creating indexes on app app launch if not in dev
    autoIndex: process.env.NODE_ENV === 'development',
  });
  return connection.connection.db;
};
