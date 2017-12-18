import express from 'express';
import path from 'path';
const router = express.Router()

router.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../../../client/index.html'));
});

export default router;
