import express, { type NextFunction, type Request, type Response } from 'express';
import crypto from 'node:crypto';

import { customersRouter } from './routes/customers.js';

export function createApp() {
  const app = express();

  app.use(express.json());

  app.use((request: Request, response: Response, next: NextFunction) => {
    response.locals.correlationId =
      request.header('x-correlation-id') ?? crypto.randomUUID();
    next();
  });

  app.get('/health', (_request: Request, response: Response) => {
    response.json({ status: 'ok' });
  });

  app.use('/customers', customersRouter);

  app.use((request: Request, response: Response) => {
    response.status(404).json({
      code: 'NOT_FOUND',
      message: `Route ${request.method} ${request.path} was not found.`,
      correlationId: String(response.locals.correlationId)
    });
  });

  return app;
}

export const app = createApp();

if (process.argv[1]?.endsWith('app.ts')) {
  const port = Number(process.env.PORT || 3001);
  app.listen(port, () => {
    console.log(`customers-service listening on http://localhost:${port}`);
  });
}

