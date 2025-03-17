import express from 'express';

import { currentUserRouter } from './current-user';
import { signInRout } from './signin';
import { signoutRout } from './signout';
import { signupRout } from './signup';

const router = express.Router();

router.use(signupRout);
router.use(signInRout);
router.use(currentUserRouter);
router.use(signoutRout);

export {router as userRoutes };