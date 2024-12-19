import express from 'express';

const router = express.Router();

router.get('/get-user-information', (req, res) => {
  res.send('get user information');
});

export default router;
