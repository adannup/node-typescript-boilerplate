import express from 'express';
import { defaultPort, log } from './utils';

const app = express();
const PORT = defaultPort();

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  log(`🚀 Server ready at http://localhost:${PORT}`);
});
