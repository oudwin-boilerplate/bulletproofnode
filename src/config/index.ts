import dotenv from 'dotenv';

// set NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'developmnet';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error('COULDNT FIND .ENV FILE');
}

export default {
  // ! PORT
  port: parseInt(<string>process.env.PORT, 10),

  // ! DATABASE
  database: {
    url: process.env.DATABASE_URL,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
  // ! JWT Auth
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresInDays: process.env.JWT_EXPIRES_IN_DAYS,
  },
  // ! API CONFIG
  api: {
    prefix: process.env.API_PREFIX || '/api',
  },
};
