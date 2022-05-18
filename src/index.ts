import express, { Application, Request, Response } from 'express';

const app: Application = express();

const PORT: number = 4001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log('Server is running at http://localhost:'+ PORT);
});