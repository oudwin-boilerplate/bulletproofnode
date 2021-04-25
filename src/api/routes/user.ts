import { Router } from 'express';

const router = Router();

export default (app: Router): void => {
  app.use('/users', router);
  // Routes as normal
  // router.route('/').get()
  // router.get('/', handler)
};
