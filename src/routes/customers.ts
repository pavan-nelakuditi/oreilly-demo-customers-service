import { Router, type Request, type Response } from 'express';

import {
  getArCustomer,
  getCashCustomer,
  getProCustomer
} from '../data/store.js';

const router = Router();

function buildErrorResponse(code: string, message: string, correlationId: string) {
  return { code, message, correlationId };
}

function parseCustomerNumber(raw: string): number | undefined {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined;
}

function readRouteParam(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value[0] ?? '';
  }
  return value ?? '';
}

function correlationIdFrom(response: Response): string {
  return String(response.locals.correlationId);
}

router.get('/ar/:customerNumber', (request: Request, response: Response) => {
  const customerNumber = parseCustomerNumber(readRouteParam(request.params.customerNumber));
  if (!customerNumber) {
    return response.status(404).json(
      buildErrorResponse('NOT_FOUND', 'Customer was not found.', correlationIdFrom(response))
    );
  }

  const customer = getArCustomer(customerNumber);
  if (!customer) {
    return response.status(404).json(
      buildErrorResponse('NOT_FOUND', 'Customer was not found.', correlationIdFrom(response))
    );
  }

  return response.json(customer);
});

router.get('/pro/:customerNumber', (request: Request, response: Response) => {
  const customerNumber = parseCustomerNumber(readRouteParam(request.params.customerNumber));
  if (!customerNumber) {
    return response.status(404).json(
      buildErrorResponse('NOT_FOUND', 'Customer was not found.', correlationIdFrom(response))
    );
  }

  const customer = getProCustomer(customerNumber);
  if (!customer) {
    return response.status(404).json(
      buildErrorResponse('NOT_FOUND', 'Customer was not found.', correlationIdFrom(response))
    );
  }

  return response.json(customer);
});

router.get('/cash/:customerNumber', (request: Request, response: Response) => {
  const customerNumber = parseCustomerNumber(readRouteParam(request.params.customerNumber));
  if (!customerNumber) {
    return response.status(404).json(
      buildErrorResponse('NOT_FOUND', 'Customer was not found.', correlationIdFrom(response))
    );
  }

  const customer = getCashCustomer(customerNumber);
  if (!customer) {
    return response.status(404).json(
      buildErrorResponse('NOT_FOUND', 'Customer was not found.', correlationIdFrom(response))
    );
  }

  return response.json(customer);
});

export { router as customersRouter };

