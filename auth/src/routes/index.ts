import express from 'express';

import { currentUserRouter } from './current-user';
import { signInRout } from './signin';
import { signoutRout } from './signout';

const router = express.Router();

router.use(signInRout);
router.use(currentUserRouter);
router.use(signoutRout);

export {router as userRoutes };