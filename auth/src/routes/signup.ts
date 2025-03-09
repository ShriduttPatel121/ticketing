import express from 'express';

const router = express.Router()

router.get("/signup", (req, res) => {
    res.send('Hi from signup')
});

export { router as signupRout };